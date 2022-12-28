import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryListManagerComponent } from './inventory-list-manager.component';

describe('InventoryListManagerComponent', () => {
  let component: InventoryListManagerComponent;
  let fixture: ComponentFixture<InventoryListManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryListManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryListManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
