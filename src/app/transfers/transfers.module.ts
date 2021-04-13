import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransfersRoutingModule } from './transfers-routing.module';
import { TransfersComponent } from './transfers.component';
import { PerformTransferComponent } from './perform-transfer/perform-transfer.component';
import { SharedModule } from '../shared/shared.module';
import { TransferReadComponent } from './transfer-read/transfer-read.component';


@NgModule({
  declarations: [
    TransfersComponent,
    PerformTransferComponent,
    TransferReadComponent,
  ],
  imports: [
    CommonModule,
    TransfersRoutingModule,
    SharedModule
  ]
})
export class TransfersModule { }
