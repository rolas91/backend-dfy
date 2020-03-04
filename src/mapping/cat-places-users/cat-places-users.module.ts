import { Module } from '@nestjs/common';
import { CatPlacesUsersService } from './cat-places-users.service';

@Module({
  providers: [CatPlacesUsersService]
})
export class CatPlacesUsersModule {}
