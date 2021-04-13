import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private dialogService: DialogService) { }

  private errorHandler(e: any) {
    if (e.status == undefined)
      this.dialogService.showSnackBar('error', 'Usuário ou senha inválidos')
    else
      this.dialogService.showSnackBar('error', e.statusText)

    return Promise.reject(e.statusText)
  }

  login(inBody) {
    let params = {}
    const regex = new RegExp(/^[[0-9]+$/g);
    if (String(inBody.login).match(regex) && inBody.login.length == 11)
      params = `cpf=${inBody.login}&password=${inBody.password}`
    else
      params = `email=${inBody.login}&password=${inBody.password}`

    return this.http.get(`${environment.baseUrl}/users?${params}`).toPromise()
      .then(res => {
        return res[0].token
      })
      .catch(err => this.errorHandler(err))
  }
}
