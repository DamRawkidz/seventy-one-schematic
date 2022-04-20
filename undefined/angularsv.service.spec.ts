import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AngularsvService } from './angularsv.service';

describe('AngularsvService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        AngularsvService,
      ]
    });
  });

  it('should be created', inject([AngularsvService], (service: AngularsvService) => {
    expect(service).toBeTruthy();
  }));

});
