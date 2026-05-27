import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileActions } from './profile-actions';

describe('ProfileActions', () => {
  let component: ProfileActions;
  let fixture: ComponentFixture<ProfileActions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileActions],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileActions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
