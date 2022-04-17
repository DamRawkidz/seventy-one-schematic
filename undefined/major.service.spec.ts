import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MajorService } from './major.service';

describe('MajorService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        MajorService,
      ]
    });
  });

  it('should be created', inject([MajorService], (service: MajorService) => {
    expect(service).toBeTruthy();
  }));

});
