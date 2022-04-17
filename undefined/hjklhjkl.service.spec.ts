import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HjklhjklService } from './hjklhjkl.service';

describe('HjklhjklService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        HjklhjklService,
      ]
    });
  });

  it('should be created', inject([HjklhjklService], (service: HjklhjklService) => {
    expect(service).toBeTruthy();
  }));

});
