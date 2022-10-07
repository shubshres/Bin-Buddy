import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResidentHomePageRoutingModule } from './resident-home-routing.module';

import { ResidentHomePage } from './resident-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResidentHomePageRoutingModule
  ],
  declarations: [ResidentHomePage]
})
export class ResidentHomePageModule {}
