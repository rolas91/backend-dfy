import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryLevel } from './category-level.entity';
import { Repository, createQueryBuilder } from 'typeorm';
import { CategoryLevelInput, CategoryLevelUpdate } from './category-level.dto';
import { validateEntity } from '../../app.dto';

@Injectable()
export class CategoryLevelService {

    constructor(@InjectRepository(CategoryLevel) private readonly repository: Repository<CategoryLevel>) { }

    async getAll() {
        return await this.repository.find();
    }

    async getById(id: number) {
        try {
            return await this.repository.findOneOrFail({ id });
        } catch (error) {
            throw new HttpException(`The CategoryLevel with id: ${id} not exist in the database!!`, HttpStatus.BAD_REQUEST)
        }
    }

    async create(input: CategoryLevelInput) {
        try {
            let category = this.parseCategoryLevel(input);
            if (await validateEntity(category) == 0)
                return await this.repository.save(category);
            else {
                throw new HttpException('Errors in fields of input', HttpStatus.BAD_REQUEST)
            }
        } catch (error) {
            throw new HttpException('Errors in fields of input', HttpStatus.BAD_REQUEST)
        }
    }

    async update(input: CategoryLevelUpdate) {
        try {
            let category = await this.getById(input.id);
            if (category) {
                category = this.parseCategoryLevel(input.categoryLevel);
                category.id = input.id;
                if (await validateEntity(category) == 0)
                    return await this.repository.save(category);
                else {
                    throw new HttpException('Errors in fields of input', HttpStatus.BAD_REQUEST)
                }
            }else{
                throw new HttpException('Errors in fields of input', HttpStatus.BAD_REQUEST)
            }
        } catch (error) {
            throw new HttpException('Errors in fields of input', HttpStatus.BAD_REQUEST)
        }
    }

    private parseCategoryLevel(input: CategoryLevelInput) {
        let category = new CategoryLevel();
        category.description = input.description;
        category.percentage = input.percentage;
        return category;
    }
}
