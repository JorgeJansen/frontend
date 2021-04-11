import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavRouterLinks } from '../shared/commons/NavRouterLinks';
import { AssetBuyComponent } from './asset-buy/asset-buy.component';
import { AssetsReadComponent } from './assets-read/assets-read.component';
import { AssetsComponent } from './assets.component';

const routes: Routes = [
  {
    path: '',
    component: AssetsComponent,
    children: [
      {
        path: NavRouterLinks.PAGE.HOME,
        component: AssetsReadComponent
      },
      {
        path: NavRouterLinks.PAGE.BUY,
        component: AssetsReadComponent
      },
      {
        path: `${NavRouterLinks.PAGE.BUY}/:asset`,
        component: AssetBuyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule { }
