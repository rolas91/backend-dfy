import { Module } from '@nestjs/common';
import { TicketStatus } from './ticket-status.entity';
import { TicketStatusService } from './ticket-status.service';
import { TicketStatusResolver } from './ticket-status.resolver';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([TicketStatus])
  ],
  providers: [TicketStatusService, TicketStatusResolver],
  exports:[TicketStatusService]
})

export class TicketStatusModule {}
