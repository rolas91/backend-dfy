import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SkiperTravelsStatus } from './skiper-travels-status.entity';
import { Repository } from 'typeorm';
import { SkiperTravelsStatusInput } from './skiper-travels-status.dto';

@Injectable()
export class SkiperTravelsStatusService {
    constructor(
        @InjectRepository(SkiperTravelsStatus)
        private readonly repository: Repository<SkiperTravelsStatus>
    ) { }
    async getAll(): Promise<SkiperTravelsStatus[]> {
        try {
            return await this.repository.find();
        } catch (error) {
            throw new HttpException(
                error,
                HttpStatus.BAD_REQUEST,
            )
        }
    }
    async getById(id: number): Promise<SkiperTravelsStatus> {
        return await this.repository.findOneOrFail({
            where: { id },
        });
    }

    async getByStatusCode(code: string): Promise<SkiperTravelsStatus> {
        return await this.repository.findOneOrFail({
            where: { codigo: code }
        });
    }

    registerTravelsStatus(input: SkiperTravelsStatusInput): Promise<SkiperTravelsStatus> {
        try {
            let skipertravelstatus = this.parseSkiperTravelStatus(input);
            return this.repository.save(skipertravelstatus);

        } catch (error) {
            throw new HttpException(
                error,
                HttpStatus.BAD_REQUEST
            )
        }
    }

    async updateSkiperTravelsStatus(input: SkiperTravelsStatusInput): Promise<SkiperTravelsStatus> {
        try {
            let skipertravelstatus = await this.getById(input.id);
            skipertravelstatus.name = input.name;
            skipertravelstatus.indicator = input.indicator;
            return this.repository.save(skipertravelstatus);

        } catch (error) {
            throw new HttpException(
                error,
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    private parseSkiperTravelStatus(input: SkiperTravelsStatusInput): SkiperTravelsStatus {
        let skipertravelsstatus: SkiperTravelsStatus = new SkiperTravelsStatus();
        // skipertravelsstatus.id = input.id;
        skipertravelsstatus.name = input.name;
        skipertravelsstatus.indicator = input.indicator;
        skipertravelsstatus.codigo = input.codigo;
        skipertravelsstatus.bgenerafactura = input.bgenerafactura;
        return skipertravelsstatus;
    }

}
