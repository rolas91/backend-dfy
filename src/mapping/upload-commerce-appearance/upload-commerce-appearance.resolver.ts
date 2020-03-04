import { Resolver, Query, Args } from '@nestjs/graphql';
import { UploadCommerceAppearanceService } from './upload-commerce-appearance.service';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('UploadCommerceAppearance')
export class UploadCommerceAppearanceResolver {

    constructor(private readonly service: UploadCommerceAppearanceService) { }

    @Query()
    getAllCommerceAppearance(@Args('id', ParseIntPipe) id: number) {
        return this.service.getAllById(id);
    }
}
