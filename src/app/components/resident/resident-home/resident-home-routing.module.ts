import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidentHomePage } from './resident-home.page';

const routes: Routes = [
  {
    path: '',
    component: ResidentHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidentHomePageRoutingModule {}
