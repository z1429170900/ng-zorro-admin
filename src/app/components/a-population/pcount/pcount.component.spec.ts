import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcountComponent } from './pcount.component';

describe('PcountComponent', () => {
  let component: PcountComponent;
  let fixture: ComponentFixture<PcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
