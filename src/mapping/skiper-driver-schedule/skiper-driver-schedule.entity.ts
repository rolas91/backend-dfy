import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class SkiperDriverSchedule {

    @PrimaryGeneratedColumn() id: number;

    @Column('time', { nullable: false }) start_time: Date;

    @Column('time', { nullable: false }) final_time: Date;

    @Column('varchar', { nullable: false, length: 5 }) turn: string;

}
