import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionsRoutingModule } from './positions-routing.module';
import { PositionsComponent } from './positions.component';
import { PositionReadComponent } from './position-read/position-read.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PositionsComponent,
    PositionReadComponent
  ],
  imports: [
    CommonModule,
    PositionsRoutingModule,
    SharedModule
  ]
})
export class PositionsModule { }
