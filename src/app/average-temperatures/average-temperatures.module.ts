import { NgModule } from '@angular/core';

import { AverageTemperaturesRoutingModule } from './average-temperatures-routing.module';

import { SharedModule } from '../shared/shared.module';

import { AverageTemperaturesService } from './shared/average-temperatures.service';

import { AverageTemperaturesComponent } from './average-temperatures.component';

@NgModule({
  imports: [
    AverageTemperaturesRoutingModule,
    SharedModule
  ],
  declarations: [AverageTemperaturesComponent],
  providers: [AverageTemperaturesService]
})
export class AverageTemperaturesModule { }
