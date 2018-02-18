import { Component, OnChanges, OnInit, Input } from '@angular/core';

import { TemperatureMap } from '../';

@Component({
  selector: 'temperature-map',
  templateUrl: './temperature-map.component.html',
  styleUrls: ['./temperature-map.component.sass']
})
export class TemperatureMapComponent implements OnChanges, OnInit {

  @Input() temperatureMap: TemperatureMap;
  @Input() i: number;

  gradientId: string;
  progressFill: string;

  mapWidth = 1000;
  mapHeight = 30;
  rectHeight: number;
  progressIndent: number;
  progress: number;
  pointerWidth = 2;
  trianglePoints: string;
  triangle = true;

  constructor() { }

  ngOnChanges() {
    // if (this.temperatureMap.temperature === undefined) {
    //   this.temperatureMap.temperature = 50;
    // }

    this.rectHeight = this.mapHeight - 7;

    this.progress = this.mapWidth / 100 * this.temperatureMap.temperature;
    this.trianglePoints = `${this.progress - 7} ${this.mapHeight},
                   ${this.progress} ${this.mapHeight - 7},
                   ${this.progress + 7} ${this.mapHeight}`;
    this.progressIndent = this.triangle ? this.mapHeight : this.rectHeight;
  }

  ngOnInit() {
    this.gradientId = `gradient${this.i}`;
    this.progressFill = `url(#${this.gradientId})`;
  }

}
