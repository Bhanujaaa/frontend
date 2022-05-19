import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowssComponent } from './showss.component';

describe('ShowssComponent', () => {
  let component: ShowssComponent;
  let fixture: ComponentFixture<ShowssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
