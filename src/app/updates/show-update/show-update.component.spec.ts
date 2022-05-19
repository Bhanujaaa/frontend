import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUpdateComponent } from './show-update.component';

describe('ShowUpdateComponent', () => {
  let component: ShowUpdateComponent;
  let fixture: ComponentFixture<ShowUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
