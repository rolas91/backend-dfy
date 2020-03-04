import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { CommerceModules } from "../commerce-modules/commerce-modules.entity";

@Entity()
export class CommerceOperations {

    @PrimaryGeneratedColumn() id: number;

    @Column({ length: 80 }) name: string;

    @ManyToOne(type => CommerceModules, { nullable: false })
    @JoinColumn({ name: 'idmodule' }) commerceModule: CommerceModules;
}