import { Injectable } from '@nestjs/common';
import { SkiperOrderDetail } from './skiper-order-detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SkiperOrderService } from '../skiper-order/skiper-order.service';
import { SkiperProductCommerceService } from '../skiper-product-commerce/skiper-product-commerce.service';

import { SkiperOrderDetailInput } from './skiper-order-detail.dto';

@Injectable()
export class SkiperOrderDetailService {
    constructor (
        @InjectRepository(SkiperOrderDetail)
        private readonly repository: Repository<SkiperOrderDetail>
    ) {}

    async getAll():Promise<SkiperOrderDetail[]> {
        return await this.repository.find({relations:["skiperOrder","skiperProductCommerce"]});
    }

    async getById(id:number):Promise<SkiperOrderDetail> {
        return await this.repository.findOne({
            relations:["skiperOrder","skiperProductCommerce"],
            where: { id }
        });
    }

    async update(input: SkiperOrderDetailInput): Promise<SkiperOrderDetail>{
        try {
            let skiperorderdetailUpdate = await this.getById(input.orderID);
            skiperorderdetailUpdate.quantity = input.quantity;
            skiperorderdetailUpdate.price = input.price;
            skiperorderdetailUpdate.discount = input.discount;
            skiperorderdetailUpdate.size = input.size;
            skiperorderdetailUpdate.addon = input.addon;
            skiperorderdetailUpdate.extraPrice = input.extraPrice;
            skiperorderdetailUpdate.iditem = input.itemID;
            skiperorderdetailUpdate.idorder = input.orderID;
            return await this.repository.save(skiperorderdetailUpdate);
        } catch (error) {
            console.log(error)
        }
    }

    async registerSkiperOrderDetail(input: SkiperOrderDetailInput): Promise<SkiperOrderDetail> {
        try
        {
            let skiperorderdetail = this.parseSkiperOrderDetail(input);
            console.log(skiperorderdetail);
            return this.repository.save(skiperorderdetail);
        }
        catch (error) {
            console.error(error);
        }
        return null;
    }

    public parseSkiperOrderDetail (input: SkiperOrderDetailInput):SkiperOrderDetail {
        let skiperorderdetail: SkiperOrderDetail = new SkiperOrderDetail();
        skiperorderdetail.quantity = input.quantity;
        skiperorderdetail.price = input.price;
        skiperorderdetail.discount = input.discount;
        skiperorderdetail.size = input.size;
        skiperorderdetail.addon = input.addon;
        skiperorderdetail.extraPrice = input.extraPrice;
        skiperorderdetail.iditem = input.itemID;
        skiperorderdetail.idorder = input.orderID;
        return skiperorderdetail;
    }
}
