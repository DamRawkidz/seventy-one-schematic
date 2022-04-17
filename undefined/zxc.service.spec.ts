import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ZxcService } from './zxc.service';

describe('ZxcService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        ZxcService,
      ]
    });
  });

  it('should be created', inject([ZxcService], (service: ZxcService) => {
    expect(service).toBeTruthy();
  }));

});
