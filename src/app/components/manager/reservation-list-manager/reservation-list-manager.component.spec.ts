import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationListManagerComponent } from './reservation-list-manager.component';

describe('ReservationListManagerComponent', () => {
  let component: ReservationListManagerComponent;
  let fixture: ComponentFixture<ReservationListManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationListManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationListManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
