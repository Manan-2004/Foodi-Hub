import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Noodles } from './noodles';

describe('Noodles', () => {
  let component: Noodles;
  let fixture: ComponentFixture<Noodles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Noodles],
    }).compileComponents();

    fixture = TestBed.createComponent(Noodles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
