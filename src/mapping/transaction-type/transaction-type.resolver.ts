import { Resolver, Query, Args } from '@nestjs/graphql';
import { TransactionTypeService } from './transaction-type.service';
import { ParseIntPipe } from '@nestjs/common';


@Resolver('TransactionType')
export class TransactionTypeResolver {
    constructor(
        private readonly service:TransactionTypeService
    ){}

    @Query()
    getAllTransactionType(){
        return this.service.getAll();
    }

    @Query()
    searchTransactionType(@Args('id') id:number){
        return this.service.getById(id);
    }
}
