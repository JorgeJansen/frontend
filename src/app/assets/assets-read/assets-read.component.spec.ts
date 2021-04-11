import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsReadComponent } from './assets-read.component';

describe('AssetsReadComponent', () => {
  let component: AssetsReadComponent;
  let fixture: ComponentFixture<AssetsReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
