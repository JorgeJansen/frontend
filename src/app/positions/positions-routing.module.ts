import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavRouterLinks } from '../shared/commons/NavRouterLinks';
import { PositionReadComponent } from './position-read/position-read.component';
import { PositionsComponent } from './positions.component';

const routes: Routes = [
  {
    path: '',
    component: PositionsComponent,
    children: [
      {
        path: NavRouterLinks.PAGE.HOME,
        component: PositionReadComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionsRoutingModule { }
