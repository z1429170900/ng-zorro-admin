import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhomePopulationComponent } from './ahome-population.component';

describe('AhomePopulationComponent', () => {
  let component: AhomePopulationComponent;
  let fixture: ComponentFixture<AhomePopulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhomePopulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhomePopulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
