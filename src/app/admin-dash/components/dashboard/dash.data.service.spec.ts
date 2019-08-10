/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DashDataService } from './dash.data.service';

describe('Service: Dash.data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashDataService]
    });
  });

  it('should ...', inject([DashDataService], (service: DashDataService) => {
    expect(service).toBeTruthy();
  }));
});
