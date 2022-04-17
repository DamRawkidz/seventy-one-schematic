import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HjklhjkService } from './hjklhjk.service';

describe('HjklhjkService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        HjklhjkService,
      ]
    });
  });

  it('should be created', inject([HjklhjkService], (service: HjklhjkService) => {
    expect(service).toBeTruthy();
  }));

});
