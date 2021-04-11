import { Component, OnInit } from '@angular/core';
import { PositionsService } from 'src/app/shared/services/positions.service';

@Component({
  selector: 'app-position-read',
  templateUrl: './position-read.component.html',
  styles: []
})
export class PositionReadComponent implements OnInit {

  userPosition: any = {}
  page = 1

  constructor(
    private positionsService: PositionsService
  ) { }

  ngOnInit() {
    this.getPositions()
  }

  async getPositions() {
    this.userPosition = await this.positionsService.readPositions()
  }

  pageChanged(event) {
    this.page = event;
  }
}
