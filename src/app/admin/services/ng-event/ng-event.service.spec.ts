import { TestBed } from '@angular/core/testing';

import { NgEventService } from './ng-event.service';

describe('NgEventService', () => {
  let service: NgEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
