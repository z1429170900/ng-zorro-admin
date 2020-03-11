import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhomeEconomicsComponent } from './ahome-economics.component';

describe('AhomeEconomicsComponent', () => {
  let component: AhomeEconomicsComponent;
  let fixture: ComponentFixture<AhomeEconomicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhomeEconomicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhomeEconomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
