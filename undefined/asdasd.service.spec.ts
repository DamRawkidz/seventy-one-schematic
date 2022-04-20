import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AsdasdService } from './asdasd.service';

describe('AsdasdService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        AsdasdService,
      ]
    });
  });

  it('should be created', inject([AsdasdService], (service: AsdasdService) => {
    expect(service).toBeTruthy();
  }));

});
