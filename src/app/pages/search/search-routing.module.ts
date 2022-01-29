import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search.component';

const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent
  },
  {
    path: ':slugId',
    loadChildren: () => import('./detail/detail.module').then(m => m.DetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchPageRoutingModule { }
