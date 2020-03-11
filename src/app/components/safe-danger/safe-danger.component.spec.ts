import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeDangerComponent } from './safe-danger.component';

describe('SafeDangerComponent', () => {
  let component: SafeDangerComponent;
  let fixture: ComponentFixture<SafeDangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeDangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
