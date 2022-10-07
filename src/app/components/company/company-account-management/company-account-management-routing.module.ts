import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyAccountManagementPage } from './company-account-management.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyAccountManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyAccountManagementPageRoutingModule {}
