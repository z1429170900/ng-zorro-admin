import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxSituationComponent } from './tax-situation.component';

describe('TaxSituationComponent', () => {
  let component: TaxSituationComponent;
  let fixture: ComponentFixture<TaxSituationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxSituationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
