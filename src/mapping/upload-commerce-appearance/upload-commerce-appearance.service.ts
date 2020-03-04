import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UploadCommerceAppearance } from './upload-commerce-appearance.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UploadCommerceAppearanceService {

    constructor(@InjectRepository(UploadCommerceAppearance) private readonly repository: Repository<UploadCommerceAppearance>) { }

    async getAllById(id: number) {
        return await this.repository.findOneOrFail({ id });
    }
}
