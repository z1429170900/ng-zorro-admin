import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanAnalysisComponent } from './human-analysis.component';

describe('HumanAnalysisComponent', () => {
  let component: HumanAnalysisComponent;
  let fixture: ComponentFixture<HumanAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
