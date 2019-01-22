import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAccountComponentComponent } from './register-account-component.component';

describe('RegisterAccountComponentComponent', () => {
  let component: RegisterAccountComponentComponent;
  let fixture: ComponentFixture<RegisterAccountComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAccountComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAccountComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
