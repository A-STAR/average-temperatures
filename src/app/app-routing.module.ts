import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'average-temperatures', pathMatch: 'full' },
  {
    path: 'average-temperatures',
    loadChildren: 'app/average-temperatures/average-temperatures.module#AverageTemperaturesModule'
  },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

const config: ExtraOptions = {
  preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
