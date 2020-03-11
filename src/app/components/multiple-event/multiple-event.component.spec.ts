import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleEventComponent } from './multiple-event.component';

describe('MultipleEventComponent', () => {
  let component: MultipleEventComponent;
  let fixture: ComponentFixture<MultipleEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
