import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoungStrongComponent } from './young-strong.component';

describe('YoungStrongComponent', () => {
  let component: YoungStrongComponent;
  let fixture: ComponentFixture<YoungStrongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoungStrongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoungStrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
