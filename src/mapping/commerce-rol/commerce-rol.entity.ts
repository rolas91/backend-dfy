import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('commerces_roles')
export class CommerceRol {
    @PrimaryGeneratedColumn() id:number;
    @Column({nullable:false}) name:string;
}
