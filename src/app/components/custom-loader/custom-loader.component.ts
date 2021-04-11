import { Component, OnInit } from '@angular/core'
import { LoaderService } from 'src/app/shared/services/loader.service'

@Component({
  selector: 'app-custom-loader',
  templateUrl: './custom-loader.component.html',
  styles: [
  ]
})
export class CustomLoaderComponent implements OnInit {

  loading = false

  constructor(private loaderService: LoaderService) {

    this.loaderService.isLoading.subscribe((v) => {
      this.loading = v
    })

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.')
  }

}
