import { Module } from '@nestjs/common';
import { CategoryAgentService } from './category-agent.service';
import { CategoryAgentResolver } from './category-agent.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryAgent } from './categoty-agent.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CategoryAgent])],
  providers: [CategoryAgentService, CategoryAgentResolver],
  exports:[CategoryAgentService]
})
export class CategoryAgentModule {}
