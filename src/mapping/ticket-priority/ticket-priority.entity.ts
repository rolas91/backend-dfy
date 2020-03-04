import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('ticket_priority')
export class TicketPriority {
    @PrimaryGeneratedColumn() id: number;
    @Column('varchar', { length: 50, nullable: false }) name: string;
}
