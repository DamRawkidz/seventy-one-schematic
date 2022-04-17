import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { VfService } from './vf.service';

describe('VfService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        VfService,
      ]
    });
  });

  it('should be created', inject([VfService], (service: VfService) => {
    expect(service).toBeTruthy();
  }));

});
