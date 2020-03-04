import { ObjectType, InputType } from "type-graphql";

@ObjectType()
export class CategoryLevelDto {
    id: number;
    description: string;
    percentage: number;
}

@InputType()
export class CategoryLevelInput {
    description: string;
    percentage: number;
}

@InputType()
export class CategoryLevelUpdate {
    id: number;
    categoryLevel: CategoryLevelInput
}
