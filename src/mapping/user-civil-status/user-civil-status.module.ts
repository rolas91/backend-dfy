import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCivilStatus } from './user-civil-status.entity';
import { UserCivilStatusService } from './user-civil-status.service';
import { UserCivilStateResolver } from './user-civil-state.resolver';

@Module({
    imports:[TypeOrmModule.forFeature([UserCivilStatus])],
    providers: [UserCivilStatusService, UserCivilStateResolver],
    exports:[UserCivilStatusService]
})
export class UserCivilStatusModule {}
