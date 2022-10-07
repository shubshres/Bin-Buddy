import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResidentRegisterPageRoutingModule } from './resident-register-routing.module';

import { ResidentRegisterPage } from './resident-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResidentRegisterPageRoutingModule, 
    ReactiveFormsModule
  ],
  declarations: [ResidentRegisterPage]
})
export class ResidentRegisterPageModule {}
