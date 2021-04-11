import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavRouterLinks } from 'src/app/shared/commons/NavRouterLinks';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  showMenu = false;
  itensMenu: any;

  constructor(
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getItensMenu()
  }

  async getItensMenu() {
    this.itensMenu = await this.commonService.getItensMenu()
  }

  redirectTo(local) {
    this.router.navigate([this.NAV[local]])
  }

  logout() {

  }

  get NAV() { return NavRouterLinks.NAV }
}
