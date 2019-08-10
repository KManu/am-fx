/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddAdminDataService } from './add-admin.data.service';

describe('Service: AddAdmin.data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddAdminDataService]
    });
  });

  it('should ...', inject([AddAdminDataService], (service: AddAdminDataService) => {
    expect(service).toBeTruthy();
  }));
});
