import { Directive, OnChanges, Input, ElementRef, ChangeDetectorRef, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[OnlyNumber]'
})
export class OnlyNumberDirective implements OnChanges {
  // Allow decimal numbers. The \. is only allowed once to occur
  private regex: RegExp = new RegExp(/^[0-9]+$/g);
  // private regex: RegExp = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);
  @Input() allowX: boolean = false;

  // Allow key codes for special events. Reflect :
  // Backspace, tab, end, home
  private specialKeys: Array<string> = ['Backspace',
    'Tab',
    'End',
    'Home',
    'ArrowLeft',
    'ArrowRight',
    'Delete'
  ];

  constructor(
    private el: ElementRef,
    private cd: ChangeDetectorRef) {
  }

  ngOnChanges() {
    this.cd.detectChanges();
    if (this.allowX) {
      this.regex = new RegExp(/^[[0-9]+|x+|X+$/g);
    } else {
      this.regex = new RegExp(/^[[0-9]+$/g);
    }
  }

  @HostListener('keypress', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }

    const current: string = this.el.nativeElement.value;
    // We need this because the current value on the DOM element
    // is not yet updated with the value from this event
    const next: string = current.concat(event.key);
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }
}
