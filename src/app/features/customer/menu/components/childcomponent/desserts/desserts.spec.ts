import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Desserts } from './desserts';

describe('Desserts', () => {
  let component: Desserts;
  let fixture: ComponentFixture<Desserts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Desserts],
    }).compileComponents();

    fixture = TestBed.createComponent(Desserts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
