import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserCivilStatus } from './user-civil-status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserCivilStatusService {

    constructor(@InjectRepository(UserCivilStatus) private readonly repository: Repository<UserCivilStatus>) { }

    async getAll() {
        return await this.repository.find();
    }

    async getById(id: number) {
        return await this.repository.findOne({ id });
    }
}
