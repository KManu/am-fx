/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrgsDataService } from './orgs.data.service';

describe('Service: Orgs.data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrgsDataService]
    });
  });

  it('should ...', inject([OrgsDataService], (service: OrgsDataService) => {
    expect(service).toBeTruthy();
  }));
});
