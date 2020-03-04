import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CategoryLevelService } from './category-level.service';
import { CategoryLevelInput, CategoryLevelUpdate } from './category-level.dto';

@Resolver('CategoryLevel')
export class CategoryLevelResolver {

    constructor(private readonly service: CategoryLevelService) { }

    @Query()
    getAllCategoryLevel() {
        return this.service.getAll();
    }

    @Query()
    getCategoryLevelById(@Args('id') id: number) {
        return this.service.getById(id);
    }

    @Mutation()
    registerCategoryLevel(@Args('input') input: CategoryLevelInput) {
        return this.service.create(input);
    }

    @Mutation()
    updateCategoryLevel(@Args('input') input: CategoryLevelUpdate) {
        return this.service.update(input);
    }
}
