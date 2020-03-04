import { Module } from '@nestjs/common';
import { SupportTicket } from "./support-ticket.entity";
import { SupportTicketService } from './support-ticket.service';
import { SupportTicketResolver } from './support-ticket.resolver';

import { AppsModule } from "../apps/apps.module";
import { KindTicketModule } from "../kind-ticket/kind-ticket.module";
import { TicketCategoryModule } from "../ticket-category/ticket-category.module";
import { TicketPriorityModule } from "../ticket-priority/ticket-priority.module";
import { TicketStatusModule } from "../ticket-status/ticket-status.module";
import { UsersModule } from "../users/users.module";

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AppsModule,
    KindTicketModule,
    TicketCategoryModule,
    TicketPriorityModule,
    TicketStatusModule,
    UsersModule,
    TypeOrmModule.forFeature([SupportTicket])
  ],
  providers: [
    SupportTicketService, 
    SupportTicketResolver],
  exports: [
    SupportTicketService
  ]
})
export class SupportTicketModule {}
