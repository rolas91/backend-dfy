import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";

import { TicketCategory } from "../ticket-category/ticket-category.entity";
import { KindTicket } from "../kind-ticket/kind-ticket.entity";
import { User } from "../users/user.entity";
import { Apps } from "../apps/apps.entity";
import { TicketPriority } from "../ticket-priority/ticket-priority.entity";
import { TicketStatus } from "../ticket-status/ticket-status.entity";

@Entity('support_ticket')
export class SupportTicket {

    @PrimaryGeneratedColumn() id: number;

    @Column('varchar', { nullable: false, length: 80 }) title: string;

    @Column('longtext', { nullable: false }) description: string;

    @Column('date', { nullable: false }) update_at: Date;

    @Column('date', {nullable: false }) created_at: Date;

    @ManyToOne(type => TicketCategory, {nullable: false })
    @JoinColumn({ name:'category_id' }) categoryID: TicketCategory;

    @ManyToOne(type => KindTicket, {nullable: false })
    @JoinColumn({name:'kind_id'}) kindID: KindTicket;

    @ManyToOne(type => User, {nullable:false })
    @JoinColumn({name: 'user_id'}) userID: User;

    @Column({ nullable: false }) asigned_id: number;

    @ManyToOne(type => Apps, {nullable: false})
    @JoinColumn({name:'app_id'}) appID: Apps;

    @ManyToOne(type => TicketPriority, {nullable: false})
    @JoinColumn({name:'priority_id'}) priorityID: TicketPriority;

    @ManyToOne(type => TicketStatus,{nullable:false})
    @JoinColumn({name: 'status_id'}) statusID: TicketStatus;

}
