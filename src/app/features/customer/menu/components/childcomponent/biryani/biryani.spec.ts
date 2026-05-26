import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Biryani } from './biryani';

describe('Biryani', () => {
  let component: Biryani;
  let fixture: ComponentFixture<Biryani>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Biryani],
    }).compileComponents();

    fixture = TestBed.createComponent(Biryani);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
