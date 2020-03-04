import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { AppCities } from "../app-cities/app-cities.entity";

@Entity('apps')
export class Apps {
    @PrimaryGeneratedColumn() id: number;
    @Column('varchar', { length: 80, nullable: false }) name: string;
    @Column('longtext', { nullable: false }) description: string;

    @OneToMany(type => AppCities, x => x.apps)
    appCities: AppCities[];
}