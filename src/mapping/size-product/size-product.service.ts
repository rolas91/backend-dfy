import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SizeProduct } from './size-product.entity';
import { Repository } from 'typeorm';
import { SkiperProductCommerceService } from '../skiper-product-commerce/skiper-product-commerce.service';
import { SizeProductInput } from './size-product.dto';

@Injectable()
export class SizeProductService {

    constructor(
        @InjectRepository(SizeProduct) private readonly repository: Repository<SizeProduct>,
        private readonly productService: SkiperProductCommerceService
    ) { }

    async getAll(): Promise<SizeProduct[]> {
        return this.repository.find({ relations: ["skiperProducts"] });
    }

    async getById(id: number): Promise<SizeProduct> {
        try {
            return this.repository.findOneOrFail({
                relations: ["skiperProducts"],
                where: { id }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async getAllByPagination(page: number): Promise<SizeProduct[]> {
        return await this.repository.find({
            relations: ["skiperProducts"],
            take: 25,
            skip: 25 * (page - 1),
            order: { id: 'ASC' }
        });
    }

    async registerSizeProduct(input: SizeProductInput): Promise<SizeProduct> {
        try {
            let product = await this.productService.getById(input.skiperProductsID);
            if (product !== undefined) {
                let sizeProduct = this.parseSizeProduct(input, product);
                return await this.repository.save(sizeProduct);
            }
        } catch (error) {
            console.log(error)
        }
    }

    async updateSizeProduct(input: SizeProductInput): Promise<SizeProduct> {
        try {
            let productActual = await this.getById(input.id);
            if (productActual) {
                productActual.description = input.description;
                productActual.skiperProducts = await this.productService.getById(input.skiperProductsID);
                productActual.extraPrice = input.extraPrice;
                return await this.repository.save(productActual);
            }
            return null;    
        } catch(error) {
        console.log(error)
    }
}

    private parseSizeProduct(input: SizeProductInput, product ?): SizeProduct {
    let option: SizeProduct = new SizeProduct();
    option.description = input.description;
    option.extraPrice = input.extraPrice;
    option.skiperProducts = product;
    return option;
}
}