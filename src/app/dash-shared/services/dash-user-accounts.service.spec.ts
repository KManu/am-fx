import { TestBed } from '@angular/core/testing';

import { DashUserAccountsService } from './dash-user-accounts.service';

describe('DashUserAccountsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashUserAccountsService = TestBed.get(DashUserAccountsService);
    expect(service).toBeTruthy();
  });
});
