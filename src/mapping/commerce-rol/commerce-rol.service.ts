import { Injectable } from '@nestjs/common';
import { CommerceRol } from './commerce-rol.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CommerceRolInput } from './commerce-rol.dto';

@Injectable()
export class CommerceRolService {
    constructor(@InjectRepository(CommerceRol) private readonly repository: Repository<CommerceRol>) { }

    async getAll(): Promise<CommerceRol[]> {
        return await this.repository.find();
    }

    async getById(id: number): Promise<CommerceRol> {
        return await this.repository.findOneOrFail({ id });
    }

    async create(input: CommerceRolInput): Promise<CommerceRol> {
        try {
            let commerceRol: CommerceRol = new CommerceRol();
            commerceRol.name = input.name;
            return await this.repository.save(commerceRol);
        } catch (error) {
            console.log(error);
        }
    }

    async update(input: CommerceRolInput): Promise<CommerceRol> {
        try {
            let commerceRol = await this.getById(input.id);
            if (commerceRol) {
                commerceRol.name = input.name;
                return await this.repository.save(commerceRol);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id: number) {
        let commerceRol = await this.getById(id);
        if (commerceRol) {
            let result = await this.repository.delete(commerceRol);
            return (result) ? true : false;
        }
    }
}