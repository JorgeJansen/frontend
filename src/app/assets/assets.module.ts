import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsRoutingModule } from './assets-routing.module';
import { AssetsComponent } from './assets.component';
import { AssetsReadComponent } from './assets-read/assets-read.component';
import { SharedModule } from '../shared/shared.module';
import { AssetBuyComponent } from './asset-buy/asset-buy.component';


@NgModule({
  declarations: [
    AssetsComponent,
    AssetBuyComponent,
    AssetsReadComponent
  ],
  imports: [
    CommonModule,
    AssetsRoutingModule,
    SharedModule
  ]
})
export class AssetsModule { }
