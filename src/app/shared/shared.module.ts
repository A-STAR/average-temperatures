import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TemperatureMapComponent } from './temperature-map/temperature-map.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [TemperatureMapComponent],
  exports: [
    CommonModule,
    TemperatureMapComponent
  ]
})
export class SharedModule { }
