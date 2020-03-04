import { Injectable } from '@nestjs/common';
import { RolOperation } from './rol-operation.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CommerceOperationsService } from '../commerce-operations/commerce-operations.service';
import { CommerceRolService } from '../commerce-rol/commerce-rol.service';
import { RolOperationInput } from './rol-operation.dto';

@Injectable()
export class RolOperationService {

    constructor(
        @InjectRepository(RolOperation) private readonly repository: Repository<RolOperation>,
        private readonly operationService: CommerceOperationsService,
        private readonly rolService: CommerceRolService
    ) { }

    async getAll(): Promise<RolOperation[]> {
        try {
            return await this.repository.find({ relations: ["commerceRol", "commerceOperation"] });
        } catch (error) {
            console.error(error);
        }
    }

    async getAllWithPagination(page: number = 1): Promise<RolOperation[]> {
        return await this.repository.find({
            relations: ["commerceRol", "commerceOperation"],
            take: 25,
            skip: 25 * (page - 1),
            order: { id: 'ASC' }
        });
    }

    async getById(id: number): Promise<RolOperation> {
        return await this.repository.findOneOrFail({
            relations: ["commerceRol", "commerceOperation"],
            where: { id }
        });
    }

    async create(input: RolOperationInput): Promise<RolOperation> {
        try {
            let operation = await this.operationService.getById(input.commerceOperationID);
            let rol = await this.rolService.getById(input.commerceRolID);
            if (rol !== undefined && operation !== undefined) {
                let rolOperation = this.parseRolOperation(operation, rol);
                return await this.repository.save(rolOperation);
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    private parseRolOperation(operation, rol): RolOperation {
        let rolOp: RolOperation = new RolOperation();
        rolOp.commerceOperation = operation;
        rolOp.commerceRol = rol;
        return rolOp;
    }
}
