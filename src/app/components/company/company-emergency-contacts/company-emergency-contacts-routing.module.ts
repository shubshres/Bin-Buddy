import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyEmergencyContactsPage } from './company-emergency-contacts.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyEmergencyContactsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyEmergencyContactsPageRoutingModule {}
