import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('kind_ticket')
export class KindTicket {
    @PrimaryGeneratedColumn() id: number;
    @Column('varchar', { length: 50, nullable: false }) name: string;
}