import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AsdService } from './asd.service';

describe('AsdService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        AsdService,
      ]
    });
  });

  it('should be created', inject([AsdService], (service: AsdService) => {
    expect(service).toBeTruthy();
  }));

});
