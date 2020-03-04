import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersCommissions } from './users-commissions.entity';
import { Repository } from 'typeorm';
import { UsersCommissionsInput } from './users-commissions.dto';
import { validateEntity } from '../../app.dto';

@Injectable()
export class UsersCommissionsService {
    constructor(@InjectRepository(UsersCommissions) private readonly repository: Repository<UsersCommissions>) { }

    async getAllById(id: number) {
        return this.repository.find({ where: { iduser_sponsor: id } });
    }

    async create(input: UsersCommissionsInput) {
        try {
            let userCommission = this.parseUsersCommissions(input);
            if (await validateEntity(userCommission) == 0)
                return await this.repository.save(userCommission);
            else {
                throw new HttpException('Errors in fields of input', HttpStatus.BAD_REQUEST)
            }
        } catch (error) {
            throw new HttpException('Errors in fields of input', HttpStatus.BAD_REQUEST)
        }
    }



    private parseUsersCommissions(input: UsersCommissionsInput) {
        let usersCommission = new UsersCommissions();
        usersCommission.idcat_level = input.idcat_level;
        usersCommission.idcountry_referred = input.idcountry_referred;
        usersCommission.idcrypto_currency = input.idcountry_referred;
        usersCommission.iduser_referred = input.iduser_referred;
        usersCommission.iduser_sponsor = input.iduser_sponsor;
        usersCommission.amount = input.amount;
        usersCommission.price_btc = input.price_btc;
        usersCommission.paidout = input.paidout;
        usersCommission.date_in = input.date_in;
        return usersCommission;
    }
}
