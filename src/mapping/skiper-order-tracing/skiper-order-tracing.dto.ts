import { SkiperOrdersStatusDto } from "../skiper-orders-status/skiper-orders-status.dto";
import { SkiperOrderDto } from "../skiper-order/skiper-order.dto";
import { ObjectType, InputType } from "type-graphql";
import { ErrorResponse } from "../../auth/auth.dto";

@ObjectType()
export class SkiperOrderTracingDto {

    id: number;
    datetracing: Date;
    orderStatus: SkiperOrdersStatusDto;
    order: SkiperOrderDto;
}

@InputType()
export class SkiperOrderTracingInput {
    orderStatusID: number;
    orderID: number;
}

@ObjectType()
export class OrderTracingResponse {
    constructor(data ,error){
        this.data = data || null;
        this.error = error || null;
    }

    data: SkiperOrderTracingDto;
    error: ErrorResponse;
}
