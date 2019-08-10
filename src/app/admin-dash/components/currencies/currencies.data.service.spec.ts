/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CurrenciesDataService } from './currencies.data.service';

describe('Service: Currencies.data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrenciesDataService]
    });
  });

  it('should ...', inject([CurrenciesDataService], (service: CurrenciesDataService) => {
    expect(service).toBeTruthy();
  }));
});
