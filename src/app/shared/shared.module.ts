import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemperatureMapComponent } from './temperature-map/temperature-map.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TemperatureMapComponent],
  exports: [
    CommonModule,
    TemperatureMapComponent
  ]
})
export class SharedModule { }
