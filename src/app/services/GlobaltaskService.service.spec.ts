/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GlobaltaskServiceService } from './GlobaltaskService.service';

describe('Service: GlobaltaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobaltaskServiceService]
    });
  });

  it('should ...', inject([GlobaltaskServiceService], (service: GlobaltaskServiceService) => {
    expect(service).toBeTruthy();
  }));
});
