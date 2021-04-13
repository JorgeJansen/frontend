import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavRouterLinks } from 'src/app/shared/commons/NavRouterLinks';
import { PositionsService } from 'src/app/shared/services/positions.service';
import { SbpService } from 'src/app/shared/services/sbp.service';

@Component({
  selector: 'app-transfer-read',
  templateUrl: './transfer-read.component.html',
  styles: []
})
export class TransferReadComponent implements OnInit {

  transfers: any = []
  page = 1
  userPosition: any = {}

  constructor(
    private sbpService: SbpService,
    private positionsService: PositionsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getTransfers()
    this.getPositions()
  }

  async getTransfers() {
    this.transfers = await this.sbpService.readTransfers()
  }

  async getPositions() {
    this.userPosition = await this.positionsService.readPositions()
  }

  pageChanged(event) {
    this.page = event;
  }

  newTransfer() {
    this.router.navigate([NavRouterLinks.NAV.PERFORM])
  }
}
