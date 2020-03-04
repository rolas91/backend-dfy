import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('ticket_category')
export class TicketCategory {
    @PrimaryGeneratedColumn() id: number;
    @Column('varchar', { length: 50, nullable: false }) name: string;
}
