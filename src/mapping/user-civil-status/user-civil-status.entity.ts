import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('users_civil_states')
export class UserCivilStatus {

    @PrimaryGeneratedColumn() id:number;

    @Column('varchar',{nullable:true,length:80}) name:string;
}
