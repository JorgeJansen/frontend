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
    this.dialogService.showSnackBar('error', e.statusText)
    return Promise.reject(e.statusText)
  }

  login(inBody) {
    return this.http.get(`${environment.baseUrl}/users?admin=${inBody.login}&password=${inBody.password}`).toPromise()
      .then(res => {
        return res[0].token
      })
      .catch(err => this.errorHandler(err))
  }
}
