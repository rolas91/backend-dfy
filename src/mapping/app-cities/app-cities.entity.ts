import { Entity, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { Apps } from "../apps/apps.entity"
import { Cities } from "../cities/cities.entity";

@Entity('apps_cities')
export class AppCities {

    @PrimaryColumn() idapp: number;
    @PrimaryColumn() idcities: number;

    @ManyToOne(type => Apps, {nullable:false})
    @JoinColumn({name: 'idapp'}) apps:Apps;

    @ManyToOne(type => Cities, {nullable:false})
    @JoinColumn({name: 'idcities'}) cities:Cities;

}
