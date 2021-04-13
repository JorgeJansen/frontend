import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SbpService } from 'src/app/shared/services/sbp.service';
import { Banks } from 'src/app/shared/commons/Banks';
import { Router } from '@angular/router';
import { NavRouterLinks } from 'src/app/shared/commons/NavRouterLinks';
import { PositionsService } from 'src/app/shared/services/positions.service';

@Component({
  selector: 'app-perform-transfer',
  templateUrl: './perform-transfer.component.html',
  styles: [
  ]
})
export class PerformTransferComponent implements OnInit {

  model: any = {
    event: 'TRANSFER',
    target: {
      bank: '352',
      branch: '0001',
      account: '300123'
    },
    origin: {},
    date: new Date(),
    amount: 0
  }
  formTransfer = {} as FormGroup
  userPosition: any = {}
  bankList: any = Banks.get()

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private positionsService: PositionsService,
    private router: Router,
    private sbpService: SbpService
  ) { }

  ngOnInit(): void {
    this.formTransfer = this.fb.group({
      bank: ['', Validators.required],
      branch: ['', Validators.required],
      account: ['', Validators.required],
      amount: ['', Validators.required]
    })
    this.getUserPosition()
  }

  async getUserPosition() {
    this.userPosition = await this.positionsService.readPositions()
  }

  padLeft(e, type) {
    if (type == 'account')
      this.formTransfer.controls.account.setValue(e.target.value.padStart(6, '0').slice(-6))
    else if (type == 'branch')
      this.formTransfer.controls.branch.setValue(e.target.value.padStart(5, '0').slice(-5))
  }

  back() {
    this.location.back()
  }

  async transfer() {
    if (this.formTransfer.valid) {
      const data = this.formTransfer.value
      this.model.origin = {
        bank: data.bank,
        branch: data.branch,
        account: data.account,
        cpf: '45358996060'
      }
      this.model.amount = parseFloat(data.amount)
      this.userPosition.checkingAccountAmount += this.model.amount
      this.userPosition.consolidated += this.model.amount

      await this.sbpService.performTransfer(this.model)
      await this.positionsService.updatePosition(this.userPosition)
      this.router.navigate([NavRouterLinks.NAV.TRANSFERS])
    } else {
      this.formTransfer.markAllAsTouched()
    }
  }

  get f() { return this.formTransfer.controls }
}
