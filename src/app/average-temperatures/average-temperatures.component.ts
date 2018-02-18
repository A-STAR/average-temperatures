import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AverageTemperaturesService } from './shared/average-temperatures.service';

import { TemperatureMap } from '../shared';

@Component({
  selector: 'average-temperatures',
  templateUrl: './average-temperatures.component.html',
  styleUrls: ['./average-temperatures.component.sass']
})
export class AverageTemperaturesComponent implements OnInit {

  temperatureMaps$: Observable<TemperatureMap[]>;

  constructor(private averageTemperatures: AverageTemperaturesService) { }

  ngOnInit() {
    this.temperatureMaps$ = this.averageTemperatures.temperatureMaps$;
  }

}
