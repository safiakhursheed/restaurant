import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListChefComponent } from './product-list-chef.component';

describe('ProductListChefComponent', () => {
  let component: ProductListChefComponent;
  let fixture: ComponentFixture<ProductListChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
