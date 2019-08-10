/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SellDataService } from './sell.data.service';

describe('Service: Sell.data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SellDataService]
    });
  });

  it('should ...', inject([SellDataService], (service: SellDataService) => {
    expect(service).toBeTruthy();
  }));
});
