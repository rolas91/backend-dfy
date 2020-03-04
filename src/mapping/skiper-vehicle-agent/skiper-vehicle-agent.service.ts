import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { SkiperVehicleAgent } from './skiper-vehicle-agent.entity';
import { Repository, createQueryBuilder } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SkiperVehicleAgentInput } from './skiper-vehicle-agent.dto';

@Injectable()
export class SkiperVehicleAgentService {

    constructor(@InjectRepository(SkiperVehicleAgent)
    private readonly repository: Repository<SkiperVehicleAgent>) { }

    async getAll(): Promise<SkiperVehicleAgent[]> {
        try {
            return await this.repository.find({
                relations: [
                    "skiperAgent", "skiperVehicle",
                    "skiperAgent.user", "skiperAgent.categoryAgent"
                ]
            });
        } catch (error) {
            throw new HttpException(
                error,
                HttpStatus.BAD_REQUEST
            )
        }
    }

    async getById(id: number): Promise<SkiperVehicleAgent> {
        return await this.repository.findOneOrFail({
            where: { id }
        });
    }

    async getBySkiperAgentId(id: number) {
        try {
            // console.log(id)
            let vehicleAgent: any =  await createQueryBuilder("SkiperVehicleAgent")
                .innerJoinAndSelect("SkiperVehicleAgent.skiperVehicle","SkiperVehicle")
                .innerJoinAndSelect("SkiperVehicle.skiperCatTravel", "SkiperCatTravel")
                .innerJoinAndSelect("SkiperVehicle.vehicleCatalog", "VehicleCatalog")
                .innerJoinAndSelect("SkiperVehicle.vehicleTrademark", "VehicleTrademark")
                .innerJoinAndSelect("SkiperVehicle.vehicleModel", "VehicleModels")
                .innerJoinAndSelect("SkiperVehicle.vehicleYear", "VehicleYears")
                .where("SkiperVehicleAgent.idagent = :idagent", { idagent: id })
                .getOne();
                return vehicleAgent.skiperVehicle;
        } catch (error) {
            console.log(error)
        }
    }

    registerSkiperVehicleAgent(input: SkiperVehicleAgentInput): Promise<SkiperVehicleAgent> {
        try {
            let skipervehicleagent = this.parseSkipeVehicleAgent(input);
            return this.repository.save(skipervehicleagent);
        } catch (error) {
            throw new HttpException(
                error,
                HttpStatus.BAD_REQUEST
            )
        }
    }

    async updateSkiperVehicleAgent(input: SkiperVehicleAgentInput): Promise<SkiperVehicleAgent> {
        try {
            console.log(input)
            let skipervehicleagent = await this.getById(input.id);
            skipervehicleagent.idagent = input.idagent;
            skipervehicleagent.idvehicle = input.idvehicle;
            skipervehicleagent.is_owner = input.isowner;
            return await this.repository.save(skipervehicleagent);
        } catch (error) {
            throw new HttpException(
                error,
                HttpStatus.BAD_REQUEST
            )
        }
    }

    private parseSkipeVehicleAgent(input: SkiperVehicleAgentInput): SkiperVehicleAgent {
        let skipervehicleagent: SkiperVehicleAgent = new SkiperVehicleAgent();
        skipervehicleagent.id = input.id;
        skipervehicleagent.idagent = input.idagent;
        skipervehicleagent.idvehicle = input.idvehicle;
        skipervehicleagent.is_owner = input.isowner;
        return skipervehicleagent;
    }


}
