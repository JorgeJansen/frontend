import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: 'root'
})
export class SbpService {

  constructor(private http: HttpClient,
    private dialogService: DialogService) { }

  private errorHandler(e: any) {
    this.dialogService.showSnackBar('error', e.statusText)
    return Promise.reject(e.statusText)
  }

  readTransfers() {
    return this.http.get(`${environment.baseUrl}/sbp?event=TRANSFER`).toPromise()
      .then(res => {
        return res
      })
      .catch(err => this.errorHandler(err))
  }

  performTransfer(inBody) {
    return this.http.post(`${environment.baseUrl}/sbp`, inBody).toPromise()
      .then(res => {
        return res
      })
      .catch(err => this.errorHandler(err))
  }
}
