import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { SkiperOrderTracing } from './skiper-order-tracing.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder } from 'typeorm';
import { SkiperOrderService } from '../skiper-order/skiper-order.service';
import { SkiperOrdersStatusService } from '../skiper-orders-status/skiper-orders-status.service';
import { SkiperOrderTracingInput } from './skiper-order-tracing.dto';
import { Errores } from '../apps/Errores';

@Injectable()
export class SkiperOrderTracingService {

    constructor(
        @InjectRepository(SkiperOrderTracing) private readonly repository: Repository<SkiperOrderTracing>,
    ) { }

    async getAll() {
        return await this.repository.find({ relations: ["orderStatus", "order"] });
    }

    async create(input: SkiperOrderTracingInput) {
        let result = await this.verifyOrderTracing(input.orderID, input.orderStatusID);
        if(result){
            throw new HttpException(
                Errores.ORDER_STATUS_EXISTS.message,
                HttpStatus.BAD_REQUEST,
            );
        }
        
        let orderTracing: SkiperOrderTracing = new SkiperOrderTracing();
        try {
            // orderTracing.order = await this.orderService.getById(input.orderID);
            // orderTracing.orderStatus = await this.orderStatusService.getById(input.orderStatusID);
            orderTracing.idorder = input.orderID;
            orderTracing.idorderstatus = input.orderStatusID;
            orderTracing = await this.repository.save(orderTracing);
            return orderTracing;

        } catch (error) {
            throw new HttpException(
                error,
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    private async verifyOrderTracing(idorder: number, idstatus: number) {
        let result = await createQueryBuilder("SkiperOrderTracing")
            .where("SkiperOrderTracing.idorderstatus = :status", { status: idstatus })
            .andWhere("SkiperOrderTracing.idorder = :order", { order: idorder })
            .getOne();
        return result;
    }
}
