import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rice } from './rice';

describe('Rice', () => {
  let component: Rice;
  let fixture: ComponentFixture<Rice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rice],
    }).compileComponents();

    fixture = TestBed.createComponent(Rice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
