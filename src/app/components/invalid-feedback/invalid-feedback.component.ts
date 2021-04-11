import { Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'invalid-feedback',
  templateUrl: './invalid-feedback.component.html',
  styles: []
})
export class InvalidFeedbackComponent {

  @Input() field
  @Input() name

  msgError = '';

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'invalid-feedback')
  }

  isError(field) {
    if (field.errors?.required) {
      this.msgError = 'Campo obrigatório.'
    } else if (field.errors?.invalidDate || field.errors?.bsDate) {
      this.msgError = 'Data inválida.'
    } else if (field.errors?.pattern) {
      this.msgError = `${this.name} inválido.`
    } else if (field.errors?.invalid) {
      this.msgError = `${this.name} inválido.`
    } else if (field.errors?.['Mask error'] || field.errors?.mask) {
      this.msgError = `${this.name} inválido.`
    } else if (field.errors?.min) {
      this.msgError = `Valor mínimo ${field.errors.min.min}.`
    } else if (field.errors?.max) {
      this.msgError = `Valor máximo ${field.errors.max.max}.`
    } else if (field.errors?.minlength) {
      this.msgError = `No mínimo ${field.errors.minlength.requiredLength} caracteres`
    }
    return this.msgError != '';
  }

}
