import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProperDisposalMethodsPageRoutingModule } from './proper-disposal-methods-routing.module';

import { ProperDisposalMethodsPage } from './proper-disposal-methods.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProperDisposalMethodsPageRoutingModule
  ],
  declarations: [ProperDisposalMethodsPage]
})
export class ProperDisposalMethodsPageModule {}
