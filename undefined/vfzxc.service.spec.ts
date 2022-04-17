import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { VfzxcService } from './vfzxc.service';

describe('VfzxcService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        VfzxcService,
      ]
    });
  });

  it('should be created', inject([VfzxcService], (service: VfzxcService) => {
    expect(service).toBeTruthy();
  }));

});
