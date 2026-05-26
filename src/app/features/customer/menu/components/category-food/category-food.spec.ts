import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFood } from './category-food';

describe('CategoryFood', () => {
  let component: CategoryFood;
  let fixture: ComponentFixture<CategoryFood>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryFood],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryFood);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
