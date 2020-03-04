import { InputType, ObjectType } from "type-graphql";
import { SkiperOrderTracing } from "../skiper-order-tracing/skiper-order-tracing.entity";

@InputType()
export class SkiperOrdersStatusInput {
    id: number;
    name: string;
    indicador: string
}

@ObjectType()
export class SkiperOrdersStatusDto {
    id: number;
    name: string;
    indicador: string;
    SkiperOrderTracing: SkiperOrderTracing[];
}
