import { CurrencyPipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavRouterLinks } from 'src/app/shared/commons/NavRouterLinks';
import { Utils } from 'src/app/shared/commons/Utils';
import { AssetsService } from 'src/app/shared/services/assets.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { PositionsService } from 'src/app/shared/services/positions.service';

@Component({
  selector: 'app-asset-buy',
  templateUrl: './asset-buy.component.html',
  styles: [],
  providers: [CurrencyPipe]
})
export class AssetBuyComponent implements OnInit {

  formAsset = {} as FormGroup
  userPosition: any = {}
  trends: any = []
  symbol = ''
  currencyPipe: CurrencyPipe = new CurrencyPipe('pt-BR');

  constructor(
    private activatedRoute: ActivatedRoute,
    private assetsService: AssetsService,
    private dialogService: DialogService,
    private fb: FormBuilder,
    private location: Location,
    private positionsService: PositionsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.formAsset = this.fb.group({
      symbol: ['', Validators.required],
      amount: ['', Validators.required],
      currentPrice: ['']
    })
    this.getUserPosition()
    this.getTrends()
  }

  async getUserPosition() {
    this.userPosition = await this.positionsService.readPositions()
  }

  async getTrends() {
    this.trends = await this.assetsService.readTrends()
    this.selectSymbol()
  }

  selectSymbol() {
    this.activatedRoute.params.subscribe(param => {
      if (param?.symbol) {
        const trend = this.trends.find(x => x.symbol == param.symbol)
        this.formAsset.controls.symbol.setValue(trend.symbol)
        this.formAsset.controls.currentPrice.setValue(Utils.maskCurrency(trend.currentPrice))
      }
    })
  }

  selectPrice(e) {
    const trend = this.trends.find(x => x.symbol == e.target.value)
    this.formAsset.controls.currentPrice.setValue(Utils.maskCurrency(trend.currentPrice))
  }

  back() {
    this.location.back()
  }

  async buy() {
    if (this.formAsset.valid) {
      let model = this.formAsset.value
      let inBody = Object.assign({}, this.userPosition)
      inBody.consolidated = 0

      model.currentPrice = Utils.moneyTofloat(model.currentPrice)
      const totalAsset = model.amount * model.currentPrice


      if (inBody.checkingAccountAmount < totalAsset) {
        this.dialogService.showSnackBar('error', 'Saldo insuficiente')
        return
      }

      inBody.checkingAccountAmount = inBody.checkingAccountAmount - totalAsset

      const findIndex = inBody.positions.findIndex(item => item.symbol == model.symbol)
      if (findIndex >= 0) { inBody.positions[findIndex].amount += model.amount }
      else { inBody.positions.push(model) }

      inBody.consolidated = inBody.checkingAccountAmount
      inBody.positions.forEach(x => {
        inBody.consolidated += (x.amount * x.currentPrice)
      })

      await this.positionsService.updatePosition(inBody)
      this.router.navigate([NavRouterLinks.NAV.POSITIONS])
    } else {
      this.formAsset.markAllAsTouched()
    }
  }

  get f() { return this.formAsset.controls }
}
