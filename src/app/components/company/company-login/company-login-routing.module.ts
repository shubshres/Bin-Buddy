import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CompanyLoginPage } from './company-login.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyLoginPageRoutingModule {}
