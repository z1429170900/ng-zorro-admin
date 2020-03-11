import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCountComponent } from './color-count.component';

describe('ColorCountComponent', () => {
  let component: ColorCountComponent;
  let fixture: ComponentFixture<ColorCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
