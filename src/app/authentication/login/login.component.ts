import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavRouterLinks } from 'src/app/shared/commons/NavRouterLinks';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  formLogin = {} as FormGroup

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      login: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  async login() {
    if (this.formLogin.valid) {
      await this.authService.login(this.formLogin.value)
      this.router.navigate([NavRouterLinks.NAV.POSITIONS])
    } else {
      this.formLogin.markAllAsTouched()
    }
  }

  get f() { return this.formLogin.controls }
}
