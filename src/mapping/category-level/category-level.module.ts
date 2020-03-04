import { Module } from '@nestjs/common';
import { CategoryLevelResolver } from './category-level.resolver';
import { CategoryLevelService } from './category-level.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryLevel } from './category-level.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CategoryLevel])],
  providers: [CategoryLevelResolver, CategoryLevelService],
  exports:[CategoryLevelService]
})
export class CategoryLevelModule {}
