import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyLoginPageRoutingModule } from './company-login-routing.module';

import { CompanyLoginPage } from './company-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyLoginPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CompanyLoginPage],
})
export class CompanyLoginPageModule {}
