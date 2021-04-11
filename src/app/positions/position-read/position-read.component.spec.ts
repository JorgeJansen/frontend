/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PositionReadComponent } from './position-read.component';

describe('PositionReadComponent', () => {
  let component: PositionReadComponent;
  let fixture: ComponentFixture<PositionReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
