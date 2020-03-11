import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventOverComponent } from './event-over.component';

describe('EventOverComponent', () => {
  let component: EventOverComponent;
  let fixture: ComponentFixture<EventOverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventOverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
