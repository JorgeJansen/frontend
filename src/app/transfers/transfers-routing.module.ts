import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavRouterLinks } from '../shared/commons/NavRouterLinks';
import { PerformTransferComponent } from './perform-transfer/perform-transfer.component';
import { TransferReadComponent } from './transfer-read/transfer-read.component';
import { TransfersComponent } from './transfers.component';

const routes: Routes = [
  {
    path: '',
    component: TransfersComponent,
    children: [
      {
        path: NavRouterLinks.PAGE.HOME,
        component: TransferReadComponent
      },
      {
        path: NavRouterLinks.PAGE.PERFORM,
        component: PerformTransferComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransfersRoutingModule { }
