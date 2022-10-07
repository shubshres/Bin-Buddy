import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyAccountManagementPageRoutingModule } from './company-account-management-routing.module';

import { CompanyAccountManagementPage } from './company-account-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyAccountManagementPageRoutingModule
  ],
  declarations: [CompanyAccountManagementPage]
})
export class CompanyAccountManagementPageModule {}
