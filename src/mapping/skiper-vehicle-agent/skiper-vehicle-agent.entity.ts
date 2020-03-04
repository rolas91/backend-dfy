import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, Column } from "typeorm";
import { SkiperAgent } from "../skiper-agent/skiper-agent.entity";
import { SkiperVehicle } from "../skiper-vehicle/skiper-vehicle.entity";

@Entity('skiper_vehicle_agent')
export class SkiperVehicleAgent {

    @PrimaryGeneratedColumn() id: number;

    @Column({nullable: true}) idagent: number;

    @Column({nullable: true}) idvehicle: number;

    @Column({nullable: true}) is_owner: number;

    @ManyToOne(type => SkiperAgent, { nullable: false })
    @JoinColumn({ name: 'idagent' }) skiperAgent: SkiperAgent;

    @ManyToOne(type => SkiperVehicle, { nullable: false })
    @JoinColumn({ name: 'idvehicle' }) skiperVehicle: SkiperVehicle;
}
