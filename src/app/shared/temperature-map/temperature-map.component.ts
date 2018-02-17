import { Component, OnInit, Input } from '@angular/core';

import { TemperatureMap } from '../';

@Component({
  selector: 'temperature-map',
  templateUrl: './temperature-map.component.html',
  styleUrls: ['./temperature-map.component.sass']
})
export class TemperatureMapComponent implements OnInit {

  @Input() temperatureMap: TemperatureMap;

  constructor() { }

  ngOnInit() {
    this.temperatureMap.temperature = 50;
  }

}
