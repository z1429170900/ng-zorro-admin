import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbroadComponent } from './abroad.component';

describe('AbroadComponent', () => {
  let component: AbroadComponent;
  let fixture: ComponentFixture<AbroadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbroadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
