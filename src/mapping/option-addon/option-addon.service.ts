import { Injectable } from '@nestjs/common';
import { OptionAddon } from './option-addon.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SkiperProductCommerceService } from '../skiper-product-commerce/skiper-product-commerce.service';
import { OptionAddonInput } from './option-addon.dto';

@Injectable()
export class OptionAddonService {

    constructor(
        @InjectRepository(OptionAddon) private readonly repository: Repository<OptionAddon>,
        private readonly productService: SkiperProductCommerceService
    ) { }

    async getAll(): Promise<OptionAddon[]> {
        return this.repository.find({ relations: ["skiperProducts"] });
    }

    async getById(id: number): Promise<OptionAddon> {
        try {
            return this.repository.findOneOrFail({
                relations: ["skiperProducts"],
                where: { id }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async getAllByPagination(page: number): Promise<OptionAddon[]> {
        return await this.repository.find({
            relations: ["skiperProducts"],
            take: 25,
            skip: 25 * (page - 1),
            order: { id: 'ASC' }
        });
    }

    async registerOptionAddon(input: OptionAddonInput): Promise<OptionAddon> {
        try {
            let product = await this.productService.getById(input.skiperProductsID);
            if (product !== undefined){
                let optionAddon = this.parseOptionAddon(input,product);
                optionAddon = await this.repository.save(optionAddon);
                return optionAddon;
            } 
        } catch (error) {
            console.log(error)
        }
    }

    private parseOptionAddon(input:OptionAddonInput,product?): OptionAddon{
        let option: OptionAddon = new OptionAddon();
        option.name = input.name;
        option.description = input.description;
        option.extraPrice = input.extraPrice;
        option.skiperProducts = product;
        return option;
    }
}
