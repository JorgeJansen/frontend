import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavRouterLinks } from 'src/app/shared/commons/NavRouterLinks';
import { AssetsService } from 'src/app/shared/services/assets.service';

@Component({
  selector: 'app-assets-read',
  templateUrl: './assets-read.component.html',
  styles: [
  ]
})
export class AssetsReadComponent implements OnInit {

  trends: any = []
  page = 1

  constructor(
    private assetsService: AssetsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTrends()
  }

  async getTrends() {
    this.trends = await this.assetsService.readTrends()
  }

  pageChanged(event) {
    this.page = event;
  }

  buyAsset(item) {
    this.router.navigate([NavRouterLinks.NAV.BUY_ASSET, item.symbol])
  }
}
