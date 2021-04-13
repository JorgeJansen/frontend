/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TransferReadComponent } from './transfer-read.component';

describe('TransferReadComponent', () => {
  let component: TransferReadComponent;
  let fixture: ComponentFixture<TransferReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
