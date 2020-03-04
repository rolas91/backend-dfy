import { Module } from '@nestjs/common';
import { TicketCategory } from './ticket-category.entity';
import { TicketCategoryService } from './ticket-category.service';
import { TicketCategoryResolver } from './ticket-category.resolver';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([TicketCategory])
  ],
  providers: [TicketCategoryService, TicketCategoryResolver],
  exports:[TicketCategoryService]
})

export class TicketCategoryModule {}
