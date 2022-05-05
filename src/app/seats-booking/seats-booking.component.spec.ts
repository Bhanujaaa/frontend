import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsBookingComponent } from './seats-booking.component';

describe('SeatsBookingComponent', () => {
  let component: SeatsBookingComponent;
  let fixture: ComponentFixture<SeatsBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatsBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
