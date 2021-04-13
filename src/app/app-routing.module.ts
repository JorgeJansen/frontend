import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { NavRouterLinks } from './shared/commons/NavRouterLinks';

const routes: Routes = [
  {
    path: '',
    redirectTo: NavRouterLinks.PAGE.LOGIN,
    pathMatch: 'full',
  },
  {
    path: NavRouterLinks.PAGE.LOGIN,
    component: LoginComponent,
  },
  { path: NavRouterLinks.MODULE.POSITIONS, loadChildren: () => import('./positions/positions.module').then(m => m.PositionsModule) },
  { path: NavRouterLinks.MODULE.ASSETS, loadChildren: () => import('./assets/assets.module').then(m => m.AssetsModule) },
  { path: NavRouterLinks.MODULE.TRANSFERS, loadChildren: () => import('./transfers/transfers.module').then(m => m.TransfersModule) },
  // redirect page error
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
