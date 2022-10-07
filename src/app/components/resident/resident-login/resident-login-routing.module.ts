import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidentLoginPage } from './resident-login.page';

const routes: Routes = [
  {
    path: '',
    component: ResidentLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidentLoginPageRoutingModule {}
