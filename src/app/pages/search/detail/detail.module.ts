import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChipModule } from 'src/app/components/chip/chip.module';
import { MasterClassModule } from 'src/app/components/masterclass/masterclass.module';
import { DetailPageRoutingModule } from './detail-routing.module';
import { DetailPageComponent } from './detail.component';

@NgModule({
  declarations: [
    DetailPageComponent
  ],
  imports: [
    DetailPageRoutingModule,
    MasterClassModule,
    ChipModule,
    CommonModule
  ]
})
export class DetailPageModule { }
