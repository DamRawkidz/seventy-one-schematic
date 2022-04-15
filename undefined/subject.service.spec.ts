import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SubjectService } from './subject.service';

describe('SubjectService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        SubjectService,
      ]
    });
  });

  it('should be created', inject([SubjectService], (service: SubjectService) => {
    expect(service).toBeTruthy();
  }));

});
