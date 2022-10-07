import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResidentUpdateAccountInformationPageRoutingModule } from './resident-update-account-information-routing.module';

import { ResidentUpdateAccountInformationPage } from './resident-update-account-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResidentUpdateAccountInformationPageRoutingModule, 
    ReactiveFormsModule,
  ],
  declarations: [ResidentUpdateAccountInformationPage]
})
export class ResidentUpdateAccountInformationPageModule {}
