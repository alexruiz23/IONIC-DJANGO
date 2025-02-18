import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemperaturasPage } from './temperaturas.page';

const routes: Routes = [
  {
    path: 'temperaturas',
    component: TemperaturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemperaturasPageRoutingModule {}
