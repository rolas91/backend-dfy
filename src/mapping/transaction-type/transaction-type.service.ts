import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { TransactionType } from './transaction-type.entity';
import { Repository } from 'typeorm';
import { TransactionTypeInput } from './transaction-type.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TransactionTypeService {
    constructor(
        @InjectRepository(TransactionType)
        private readonly repository: Repository<TransactionType>
    ) { }

    async getAll(): Promise<TransactionType[]> {
        return await this.repository.find();
    }

    async getById(id: number): Promise<TransactionType> {
        try {
            return await this.repository.findOneOrFail({ where: { id: id } });
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    async registerTransaction(input: TransactionTypeInput) {
        try {
            let result = this.parseTransactionType(input);
            return await this.repository.save(result);

        } catch (error) {

        }
    }

    async updateTransaction(input: TransactionTypeInput) {
        try {
            let result = await this.getById(input.id);
            if (result) {
                result.name = input.name;
                return await this.repository.save(result);
            }

        } catch (error) {
            console.error(error);
        }
    }

    private parseTransactionType(input: TransactionTypeInput): TransactionType {
        let transactiontype: TransactionType = new TransactionType();
        transactiontype.name = input.name;
        return transactiontype;
    }
}
