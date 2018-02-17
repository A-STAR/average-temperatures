import { Component, OnInit } from '@angular/core';

import { AverageTemperaturesService } from './shared/average-temperatures.service';

import { TemperatureMap } from './shared/temperature-map.interface';

@Component({
  selector: 'average-temperatures',
  templateUrl: './average-temperatures.component.html',
  styleUrls: ['./average-temperatures.component.sass']
})
export class AverageTemperaturesComponent implements OnInit {

  temperatureMaps: TemperatureMap[] = [
    {color: '#0000ff'},
    {color: '#ff0000'}
  ];

  constructor(private averageTemperatures: AverageTemperaturesService) { }

  ngOnInit() {

    this.temperatureMaps.map(element => this.averageTemperatures
      .temperature$
      .subscribe((response: number) => element.temperature = response)
    );

  }

}
