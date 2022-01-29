import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPageComponent } from './detail.component';

@NgModule({
  declarations: [
    DetailPageComponent
  ],
  imports: [
    DetailPageRoutingModule
  ]
})
export class DetailPageModule { }
