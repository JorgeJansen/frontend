import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvalidFeedbackComponent } from '../components/invalid-feedback/invalid-feedback.component';
import { CustomLoaderComponent } from '../components/custom-loader/custom-loader.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from '../templates/header/header.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    CustomLoaderComponent,
    HeaderComponent,
    InvalidFeedbackComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    TooltipModule.forRoot()
  ],
  exports: [
    FormsModule,
    HeaderComponent,
    InvalidFeedbackComponent,
    NgxPaginationModule,
    ReactiveFormsModule,
    TooltipModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
