import { Test, TestingModule } from '@nestjs/testing';
import { SkiperSubCatCommercesResolver } from './skiper-sub-cat-commerces.resolver';

describe('SkiperSubCatCommercesResolver', () => {
  let resolver: SkiperSubCatCommercesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SkiperSubCatCommercesResolver],
    }).compile();

    resolver = module.get<SkiperSubCatCommercesResolver>(SkiperSubCatCommercesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
