import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResidentAccountManagementPageRoutingModule } from './resident-account-management-routing.module';

import { ResidentAccountManagementPage } from './resident-account-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResidentAccountManagementPageRoutingModule
  ],
  declarations: [ResidentAccountManagementPage]
})
export class ResidentAccountManagementPageModule {}
