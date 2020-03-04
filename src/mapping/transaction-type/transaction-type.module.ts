import { Module } from '@nestjs/common';
import { TransactionTypeService } from './transaction-type.service';
import { TransactionTypeResolver } from './transaction-type.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionType } from './transaction-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransactionType])],
  providers: [TransactionTypeService, TransactionTypeResolver],
  exports: [TransactionTypeService]
})
export class TransactionTypeModule { }
