import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usecase2Component } from './usecase2.component';

describe('Usecase2Component', () => {
  let component: Usecase2Component;
  let fixture: ComponentFixture<Usecase2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Usecase2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Usecase2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
