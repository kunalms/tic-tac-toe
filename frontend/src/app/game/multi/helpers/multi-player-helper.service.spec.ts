import {TestBed} from '@angular/core/testing';

import {MultiPlayerHelperService} from './multi-player-helper.service';

describe('MultiPlayerHelperService', () => {
  let service: MultiPlayerHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiPlayerHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
