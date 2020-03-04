import { Resolver, Query, Args } from '@nestjs/graphql';
import { OptionAddonService } from './option-addon.service';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('OptionAddon')
export class OptionAddonResolver {

    constructor(private readonly service: OptionAddonService) { }

    @Query()
    optionsAddons(){
        return this.service.getAll();
    }

    @Query()
    optionAddonById(@Args('id',ParseIntPipe) id:number) {
        return this.service.getById(id);
    }
}
