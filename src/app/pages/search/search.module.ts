import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPageComponent } from './search.component';

@NgModule({
  declarations: [
    SearchPageComponent
  ],
  imports: [
    SearchPageRoutingModule
  ]
})
export class SearchPageModule { }
