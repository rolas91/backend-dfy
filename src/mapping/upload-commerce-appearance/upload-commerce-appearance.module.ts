import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadCommerceAppearance } from './upload-commerce-appearance.entity';
import { UploadCommerceAppearanceService } from './upload-commerce-appearance.service';
import { UploadCommerceAppearanceResolver } from './upload-commerce-appearance.resolver';

@Module({
    imports:[TypeOrmModule.forFeature([UploadCommerceAppearance])],
    providers: [UploadCommerceAppearanceService, UploadCommerceAppearanceResolver],
    exports:[UploadCommerceAppearanceService]
})
export class UploadCommerceAppearanceModule {}
