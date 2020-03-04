import { SkiperAgentDto } from "../skiper-agent/skiper-agent.dto";
import { SkiperVehicleDto } from "../skiper-vehicle/skiper-vehicle.dto";
import { ObjectType, InputType } from "type-graphql";

@InputType()
export class SkiperVehicleAgentInput {
    id:number;
    idagent:number;
    idvehicle: number;
    isowner: number;
}

@ObjectType()
export class SkiperVehicleAgentDto {
    id: number;
    skiperAgent: SkiperAgentDto;
    skiperVehicle: SkiperVehicleDto;
}
