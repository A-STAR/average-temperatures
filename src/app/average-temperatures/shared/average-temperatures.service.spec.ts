import { TestBed, inject } from '@angular/core/testing';

import { AverageTemperaturesService } from './average-temperatures.service';

describe('AverageTemperaturesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AverageTemperaturesService]
    });
  });

  it('should be created', inject([AverageTemperaturesService], (service: AverageTemperaturesService) => {
    expect(service).toBeTruthy();
  }));
});
