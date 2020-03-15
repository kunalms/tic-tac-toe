import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'single'
  },
  {
    path: 'single',
    loadChildren: () => import('./single/single.module').then(m => m.SingleModule)
  },
  {
    path: 'multi',
    loadChildren: () => import('./multi/multi.module').then(m => m.MultiModule)
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule {
}
