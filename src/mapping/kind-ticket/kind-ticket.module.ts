import { Module } from '@nestjs/common';
import { KindTicket } from './kind-ticket.entity';
import { KindTicketService } from './kind-ticket.service';
import { KindTicketResolver } from './kind-ticket.resolver';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([KindTicket])
  ],
  providers: [KindTicketService, KindTicketResolver],
  exports:[KindTicketService]
})

export class KindTicketModule {}
