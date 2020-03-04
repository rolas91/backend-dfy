import { Test, TestingModule } from '@nestjs/testing';
import { CatPlacesUsersService } from './cat-places-users.service';

describe('CatPlacesUsersService', () => {
  let service: CatPlacesUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatPlacesUsersService],
    }).compile();

    service = module.get<CatPlacesUsersService>(CatPlacesUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
