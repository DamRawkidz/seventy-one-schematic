import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { QweService } from './qwe.service';

describe('QweService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        QweService,
      ]
    });
  });

  it('should be created', inject([QweService], (service: QweService) => {
    expect(service).toBeTruthy();
  }));

});
