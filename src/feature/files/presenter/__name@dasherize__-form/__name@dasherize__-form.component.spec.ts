import { ComponentFixture, TestBed } from '@angular/core/testing';

import { <%= classify(name) %>FormComponent } from './<%= dasherize(name) %>-form.component';

describe('<%= classify(name) %>FormComponent', () => {
  let component: <%= classify(name) %>FormComponent;
  let fixture: ComponentFixture<<%= classify(name) %>FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [<%= classify(name) %>FormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(<%= classify(name) %>FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
