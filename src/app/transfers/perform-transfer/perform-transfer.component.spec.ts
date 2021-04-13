import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformTransferComponent } from './perform-transfer.component';

describe('PerformTransferComponent', () => {
  let component: PerformTransferComponent;
  let fixture: ComponentFixture<PerformTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
