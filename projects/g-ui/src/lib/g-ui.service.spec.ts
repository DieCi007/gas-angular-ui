import { TestBed } from '@angular/core/testing';

import { GUiService } from './g-ui.service';

describe('GUiService', () => {
  let service: GUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
