import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryListChefComponent } from './inventory-list-chef.component';

describe('InventoryListChefComponent', () => {
  let component: InventoryListChefComponent;
  let fixture: ComponentFixture<InventoryListChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryListChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryListChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
