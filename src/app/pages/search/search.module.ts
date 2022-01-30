import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChipModule } from 'src/app/components/chip/chip.module';
import { MasterClassModule } from 'src/app/components/masterclass/masterclass.module';
import { BoxShadowDirectiveModule } from 'src/app/directives/box-shadow/box-shadow.module';
import { RoundedDirectiveModule } from 'src/app/directives/rounded/rounded.module';
import { SearchPageRoutingModule } from './search-routing.module';
import { SearchPageComponent } from './search.component';

@NgModule({
  declarations: [
    SearchPageComponent
  ],
  imports: [
    SearchPageRoutingModule,
    MasterClassModule,
    RoundedDirectiveModule,
    BoxShadowDirectiveModule,
    ChipModule,
    CommonModule
  ],
  providers: []
})
export class SearchPageModule { }
