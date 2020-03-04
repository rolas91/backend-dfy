import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class CommerceModules {

    @PrimaryGeneratedColumn() id: number;

    @Column('varchar',{nullable:false,length:80})name:string;
}
