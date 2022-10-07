import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidentRegisterPage } from './resident-register.page';

const routes: Routes = [
  {
    path: '',
    component: ResidentRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidentRegisterPageRoutingModule {}
