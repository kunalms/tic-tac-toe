import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './helpers/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'game'
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then(m => m.VerificationModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then(m => m.GameModule),
    canActivateChild: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
