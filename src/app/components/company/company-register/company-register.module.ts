import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyRegisterPageRoutingModule } from './company-register-routing.module';

import { CompanyRegisterPage } from './company-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyRegisterPageRoutingModule
  ],
  declarations: [CompanyRegisterPage]
})
export class CompanyRegisterPageModule {}
