import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResidentLoginPageRoutingModule } from './resident-login-routing.module';

import { ResidentLoginPage } from './resident-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResidentLoginPageRoutingModule, 
    ReactiveFormsModule,
  ],
  declarations: [ResidentLoginPage]
})
export class ResidentLoginPageModule {}
