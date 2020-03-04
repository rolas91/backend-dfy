import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { SkiperAgent } from "../skiper-agent/skiper-agent.entity";


@Entity()
export class CategoryAgent {

    @PrimaryGeneratedColumn() id:number;
    
    @Column({nullable:false,length:50}) name:string

    @OneToMany(type => SkiperAgent, x => x.categoryAgent)
    agents: SkiperAgent[];
}
