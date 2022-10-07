import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProperDisposalMethodsPage } from './proper-disposal-methods.page';

const routes: Routes = [
  {
    path: '',
    component: ProperDisposalMethodsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProperDisposalMethodsPageRoutingModule {}
