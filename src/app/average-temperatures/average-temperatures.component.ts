import { Component, OnInit } from '@angular/core';

import { AverageTemperaturesService } from './shared/average-temperatures.service';

@Component({
  selector: 'app-average-temperatures',
  templateUrl: './average-temperatures.component.html',
  styleUrls: ['./average-temperatures.component.sass']
})
export class AverageTemperaturesComponent implements OnInit {

  constructor(private averageTemperatures: AverageTemperaturesService) { }

  ngOnInit() {
    this.averageTemperatures.temperature$.subscribe(console.log);
  }

}
