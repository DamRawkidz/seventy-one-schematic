import { ComponentFixture, TestBed } from '@angular/core/testing';

import { <%= classify(name) %>SearchComponent } from './<%= dasherize(name) %>-search.component';

describe('<%= classify(name) %>SearchComponent', () => {
  let component: <%= classify(name) %>SearchComponent;
  let fixture: ComponentFixture<<%= classify(name) %>SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [<%= classify(name) %>SearchComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(<%= classify(name) %>SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
