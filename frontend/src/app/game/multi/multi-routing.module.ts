import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MultiComponent} from './multi.component';

const routes: Routes = [{path: '', component: MultiComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiRoutingModule {
}
