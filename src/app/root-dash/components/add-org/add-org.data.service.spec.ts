/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddOrg.dataService } from './add-org.data.service';

describe('Service: AddOrg.data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddOrg.dataService]
    });
  });

  it('should ...', inject([AddOrg.dataService], (service: AddOrg.dataService) => {
    expect(service).toBeTruthy();
  }));
});
