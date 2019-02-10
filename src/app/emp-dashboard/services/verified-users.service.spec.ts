import { TestBed } from '@angular/core/testing';

import { VerifiedUsersService } from './verified-users.service';

describe('VerifiedUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerifiedUsersService = TestBed.get(VerifiedUsersService);
    expect(service).toBeTruthy();
  });
});
