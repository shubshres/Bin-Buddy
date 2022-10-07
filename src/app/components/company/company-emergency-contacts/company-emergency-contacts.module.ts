import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyEmergencyContactsPageRoutingModule } from './company-emergency-contacts-routing.module';

import { CompanyEmergencyContactsPage } from './company-emergency-contacts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyEmergencyContactsPageRoutingModule
  ],
  declarations: [CompanyEmergencyContactsPage]
})
export class CompanyEmergencyContactsPageModule {}
