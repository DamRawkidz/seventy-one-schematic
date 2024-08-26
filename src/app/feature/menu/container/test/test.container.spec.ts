import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestContainer } from './test.container';

describe('TestContainer', () => {
  let component: TestContainer;
  let fixture: ComponentFixture<TestContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestContainer]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
