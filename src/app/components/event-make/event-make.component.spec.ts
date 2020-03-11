import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMakeComponent } from './event-make.component';

describe('EventMakeComponent', () => {
  let component: EventMakeComponent;
  let fixture: ComponentFixture<EventMakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventMakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
