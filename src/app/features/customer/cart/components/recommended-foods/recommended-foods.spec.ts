import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedFoods } from './recommended-foods';

describe('RecommendedFoods', () => {
  let component: RecommendedFoods;
  let fixture: ComponentFixture<RecommendedFoods>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedFoods],
    }).compileComponents();

    fixture = TestBed.createComponent(RecommendedFoods);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
