import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  constructor(private http: HttpClient,
    private dialogService: DialogService) { }

  private errorHandler(e: any) {
    this.dialogService.showSnackBar('error', e.statusText)
    return Promise.reject(e.statusText)
  }

  readPositions() {
    return this.http.get(`${environment.baseUrl}/userPosition`).toPromise()
      .then(res => {
        return res
      })
      .catch(err => this.errorHandler(err))
  }
}
