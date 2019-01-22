import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindUserResetPasswordComponentComponent } from './find-user-reset-password-component.component';

describe('FindUserResetPasswordComponentComponent', () => {
  let component: FindUserResetPasswordComponentComponent;
  let fixture: ComponentFixture<FindUserResetPasswordComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindUserResetPasswordComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindUserResetPasswordComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
