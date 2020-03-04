import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { CommerceOperations } from "../commerce-operations/commerce-operations.entity";
import { CommerceRol } from "../commerce-rol/commerce-rol.entity";

@Entity()
export class RolOperation {

    @PrimaryGeneratedColumn() id: number;

    @ManyToOne(type => CommerceOperations, { nullable: false })
    @JoinColumn({ name: 'idoperation' }) commerceOperation: CommerceOperations;

    @ManyToOne(type => CommerceRol, { nullable: false })
    @JoinColumn({ name: 'idrol' }) commerceRol: CommerceRol;
}
