import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DialogService {

  constructor(
  ) { }

  showSnackBar(type, msg) {
    const snackbar: any = document.getElementById('snackbar');
    snackbar.className =  `show ${type}`;
    snackbar.firstElementChild.innerHTML = msg;
    setTimeout(function(){ snackbar.className = ''; }, 3000);
  }
}
