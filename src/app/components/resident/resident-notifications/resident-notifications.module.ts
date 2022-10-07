import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResidentNotificationsPageRoutingModule } from './resident-notifications-routing.module';

import { ResidentNotificationsPage } from './resident-notifications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResidentNotificationsPageRoutingModule
  ],
  declarations: [ResidentNotificationsPage]
})
export class ResidentNotificationsPageModule {}
