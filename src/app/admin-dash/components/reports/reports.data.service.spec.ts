/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReportsDataService } from './reports.data.service';

describe('Service: Reports.data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportsDataService]
    });
  });

  it('should ...', inject([ReportsDataService], (service: ReportsDataService) => {
    expect(service).toBeTruthy();
  }));
});
