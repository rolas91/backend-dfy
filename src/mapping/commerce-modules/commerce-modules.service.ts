import { Injectable } from '@nestjs/common';
import { CommerceModules } from './commerce-modules.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommerceModulesDto, CommerceModulesInput } from './commerce-modules.dto';

@Injectable()
export class CommerceModulesService {

    constructor(@InjectRepository(CommerceModules) private readonly repository: Repository<CommerceModules>) { }

    async getAll(): Promise<CommerceModules[]> {
        return await this.repository.find();
    }

    async getAllWithPagination(page: number = 1): Promise<CommerceModules[]> {
        return await this.repository.find({
            take: 25,
            skip: 25 * (page - 1),
            order: { id: 'ASC' }
        });
    }

    async getById(id: number): Promise<CommerceModules> {
        return await this.repository.findOneOrFail({ id });
    }

    async create(input: CommerceModulesInput): Promise<CommerceModules> {
        let commerceModule: CommerceModules = new CommerceModules();
        commerceModule.name = input.name;
        return await this.repository.save(commerceModule);
    }

    async update(input: CommerceModulesInput): Promise<CommerceModules> {
        try {
            let commerceModule = await this.getById(input.id);
            if (commerceModule !== undefined) {
                commerceModule.name = input.name;
                return await this.repository.save(commerceModule);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id: number): Promise<boolean> {
        let commerceModule = await this.getById(id);
        if (commerceModule) {
            let result = await this.repository.delete(commerceModule);
            return (result) ? true : false;
        }
    }
}
