import { ObjectType, InputType } from "type-graphql";
import { CommerceOperationsDto } from "../commerce-operations/commerce-operations.dto";
import { CommerceRolDto } from "../commerce-rol/commerce-rol.dto";

@ObjectType()
export class RolOperationDto {
    id: number;
    commerceOperation: CommerceOperationsDto;
    commerceRol: CommerceRolDto;
}

@InputType()
export class RolOperationInput {
    id: number;
    commerceOperationID: number;
    commerceRolID: number;
}
