/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecordsDataService } from './records.data.service';

describe('Service: Records.data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecordsDataService]
    });
  });

  it('should ...', inject([RecordsDataService], (service: RecordsDataService) => {
    expect(service).toBeTruthy();
  }));
});
