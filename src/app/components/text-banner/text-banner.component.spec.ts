import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBannerComponent } from './text-banner.component';

describe('TextBannerComponent', () => {
  let component: TextBannerComponent;
  let fixture: ComponentFixture<TextBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
