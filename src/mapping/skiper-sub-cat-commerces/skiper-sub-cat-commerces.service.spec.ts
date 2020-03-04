import { Test, TestingModule } from '@nestjs/testing';
import { SkiperSubCatCommercesService } from './skiper-sub-cat-commerces.service';

describe('SkiperSubCatCommercesService', () => {
  let service: SkiperSubCatCommercesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SkiperSubCatCommercesService],
    }).compile();

    service = module.get<SkiperSubCatCommercesService>(SkiperSubCatCommercesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
