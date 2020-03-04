import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionAddon } from './option-addon.entity';
import { OptionAddonService } from './option-addon.service';
import { OptionAddonResolver } from './option-addon.resolver';
import { SkiperProductCommerceModule } from '../skiper-product-commerce/skiper-product-commerce.module';

@Module({
    imports:[
        SkiperProductCommerceModule,
        TypeOrmModule.forFeature([OptionAddon])],
    providers: [OptionAddonService, OptionAddonResolver]
})
export class OptionAddonModule {}
