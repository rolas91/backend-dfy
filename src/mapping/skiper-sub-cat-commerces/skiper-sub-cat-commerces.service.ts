import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import {SkiperSubCatCommerces} from './skiper-sub-cat-commerces.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder } from 'typeorm';
import {SkiperSubCatCommerceInput} from './skiper-sub-cat-commerces.dto';

@Injectable()
export class SkiperSubCatCommercesService {
    constructor(
        @InjectRepository(SkiperSubCatCommerces)
        private readonly repository: Repository<SkiperSubCatCommerces>,
    ) {}

   /* async getByIdSubCategoryCommerce(id: number): Promise<SkiperSubCatCommerces> {
        return await this.repository.createQueryBuilder('SkiperCommerce')
        .innerJoinAndSelect('skipersubcatcommerces.catcommerce', 'SkiperCatCommerce')
        .where('skipersubcatcommerces.id = :id', {id}).getOne();
    }*/
    async getAll(): Promise<SkiperSubCatCommerces[]> {
        try {
            return await this.repository.find({
                relations: ['catcommerce'],
            });

        } catch (error) {
            throw new HttpException(
                error,
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async getById(id: number): Promise<SkiperSubCatCommerces> {
        return await this.repository.findOneOrFail({
            where: { id },
        });
    }

    registerSubCatCommerce(input: SkiperSubCatCommerceInput): Promise<SkiperSubCatCommerces> {
        try {
            let skipersubcatcommerce = this.parseSkiperSubCateCommerce(input);
            return this.repository.save(skipersubcatcommerce);

        } catch (error) {
            throw new HttpException(
                error,
                HttpStatus.BAD_REQUEST,
            )
        }
    }

    async updateSkiperSubCatCommerce(input: SkiperSubCatCommerceInput): Promise<SkiperSubCatCommerces> {
        try {
            let skipersubcatcommerce = await this.getById(input.id);
            skipersubcatcommerce = this.parseSkiperSubCateCommerce(input);
            skipersubcatcommerce.id = input.id;
            return this.repository.save(skipersubcatcommerce);

        } catch (error) {
            throw new HttpException(
                error,
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    private parseSkiperSubCateCommerce(input: SkiperSubCatCommerceInput): SkiperSubCatCommerces {
        let skipersubcatcommerce: SkiperSubCatCommerces = new SkiperSubCatCommerces();
        skipersubcatcommerce.name = input.name;
        skipersubcatcommerce.id_cat_commerce = input.id_cat_commerce;
        skipersubcatcommerce.url_img = input.url_img;

        return skipersubcatcommerce;
    }
}
