import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponBox } from './coupon-box';

describe('CouponBox', () => {
  let component: CouponBox;
  let fixture: ComponentFixture<CouponBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouponBox],
    }).compileComponents();

    fixture = TestBed.createComponent(CouponBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
