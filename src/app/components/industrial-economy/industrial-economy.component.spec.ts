import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialEconomyComponent } from './industrial-economy.component';

describe('IndustrialEconomyComponent', () => {
  let component: IndustrialEconomyComponent;
  let fixture: ComponentFixture<IndustrialEconomyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustrialEconomyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustrialEconomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
