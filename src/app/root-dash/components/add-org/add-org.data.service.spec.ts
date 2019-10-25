/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddOrgDataService } from './add-org.data.service';

describe('Service: AddOrg.data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddOrgDataService]
    });
  });

  it('should ...', inject([AddOrgDataService], (service: AddOrgDataService) => {
    expect(service).toBeTruthy();
  }));
});
