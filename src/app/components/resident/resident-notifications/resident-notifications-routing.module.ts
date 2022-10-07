import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidentNotificationsPage } from './resident-notifications.page';

const routes: Routes = [
  {
    path: '',
    component: ResidentNotificationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidentNotificationsPageRoutingModule {}
