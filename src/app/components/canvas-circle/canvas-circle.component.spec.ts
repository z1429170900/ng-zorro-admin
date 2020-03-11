import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasCircleComponent } from './canvas-circle.component';

describe('CanvasCircleComponent', () => {
  let component: CanvasCircleComponent;
  let fixture: ComponentFixture<CanvasCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
