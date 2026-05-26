import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Displayfoodcard } from './displayfoodcard';

describe('Displayfoodcard', () => {
  let component: Displayfoodcard;
  let fixture: ComponentFixture<Displayfoodcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Displayfoodcard],
    }).compileComponents();

    fixture = TestBed.createComponent(Displayfoodcard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
