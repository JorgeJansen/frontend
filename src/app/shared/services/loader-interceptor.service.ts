import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { finalize, catchError } from 'rxjs/operators';
import { DialogService } from './dialog.service';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService {
  private requests: HttpRequest<any>[] = [];
  private count = 0;
  constructor(
    private loaderService: LoaderService,
    private dialoService: DialogService
  ) { }

  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }
    this.loaderService.isLoading.next(this.requests.length > 0);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.count === 0) {
      this.loaderService.isLoading.next(true);
    }
    this.count++;
    return next.handle(req).pipe(
      catchError((response: any) => {
        if (response.status == 500) {
          this.dialoService.showSnackBar('error', 'Estamos com instabilidade no sistema e alguns serviços poderão ser afetados.')
        }
        return throwError(response)
      }),
      finalize(() => {
        this.count--;
        if (this.count === 0) {
          this.loaderService.isLoading.next(false);
        }
      })
    );
  }
}
