import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CurService } from './cur.service';

describe('CurService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        CurService,
      ]
    });
  });

  it('should be created', inject([CurService], (service: CurService) => {
    expect(service).toBeTruthy();
  }));

});
