import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcountComponent } from './ecount.component';

describe('EcountComponent', () => {
  let component: EcountComponent;
  let fixture: ComponentFixture<EcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
