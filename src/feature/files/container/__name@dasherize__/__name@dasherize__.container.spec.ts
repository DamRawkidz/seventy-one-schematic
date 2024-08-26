import { ComponentFixture, TestBed } from '@angular/core/testing';

import { <%= classify(name) %>Container } from './<%= dasherize(name) %>.container';

describe('<%= classify(name) %>Container', () => {
  let component: <%= classify(name) %>Container;
  let fixture: ComponentFixture<<%= classify(name) %>Container>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [<%= classify(name) %>Container]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(<%= classify(name) %>Container);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
