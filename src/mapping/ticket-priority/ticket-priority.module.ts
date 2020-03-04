import { Module } from '@nestjs/common';
import { TicketPriority } from './ticket-priority.entity';
import { TicketPriorityService } from './ticket-priority.service';
import { TicketPriorityResolver } from './ticket-priority.resolver';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([TicketPriority])
  ],
  providers: [TicketPriorityService, TicketPriorityResolver],
  exports:[TicketPriorityService]
})

export class TicketPriorityModule {}
