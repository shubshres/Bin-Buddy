import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidentAccountManagementPage } from './resident-account-management.page';

const routes: Routes = [
  {
    path: '',
    component: ResidentAccountManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidentAccountManagementPageRoutingModule {}
