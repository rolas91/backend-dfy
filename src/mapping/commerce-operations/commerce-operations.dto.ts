import { CommerceModulesDto } from "../commerce-modules/commerce-modules.dto";
import { ObjectType, InputType } from "type-graphql";

@ObjectType()
export class CommerceOperationsDto {
    id: number;
    name: string;
    commerceModule: CommerceModulesDto;
}

@InputType()
export class CommerceOperationsInput {
    id: number;
    name: string;
    commerceModuleID: number;
}
