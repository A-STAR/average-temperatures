import { Component, OnInit } from '@angular/core';

import { AverageTemperaturesService } from './shared/average-temperatures.service';

import { TemperatureMap } from './shared/temperature-map.interface';

@Component({
  selector: 'app-average-temperatures',
  templateUrl: './average-temperatures.component.html',
  styleUrls: ['./average-temperatures.component.sass']
})
export class AverageTemperaturesComponent implements OnInit {

  temperatureMaps: TemperatureMap[];

  constructor(private averageTemperatures: AverageTemperaturesService) { }

  ngOnInit() {
    this.averageTemperatures.temperature$.subscribe(console.log);
  }

}
