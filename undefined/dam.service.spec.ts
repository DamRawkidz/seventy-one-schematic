import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DamService } from './dam.service';

describe('DamService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        DamService,
      ]
    });
  });

  it('should be created', inject([DamService], (service: DamService) => {
    expect(service).toBeTruthy();
  }));

});
