import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TesttestService } from './testtest.service';

describe('TesttestService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        TesttestService,
      ]
    });
  });

  it('should be created', inject([TesttestService], (service: TesttestService) => {
    expect(service).toBeTruthy();
  }));

});
