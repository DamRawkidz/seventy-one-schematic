import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TestService } from './test.service';

describe('TestService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        TestService,
      ]
    });
  });

  it('should be created', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));

});
