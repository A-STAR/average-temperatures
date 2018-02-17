import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AverageTemperaturesComponent } from './average-temperatures.component';

const routes: Routes = [
  {
    path: '',
    component: AverageTemperaturesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AverageTemperaturesRoutingModule { }
