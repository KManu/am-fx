/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BuyDataService } from './buy.data.service';

describe('Service: Buy.data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuyDataService]
    });
  });

  it('should ...', inject([BuyDataService], (service: BuyDataService) => {
    expect(service).toBeTruthy();
  }));
});
