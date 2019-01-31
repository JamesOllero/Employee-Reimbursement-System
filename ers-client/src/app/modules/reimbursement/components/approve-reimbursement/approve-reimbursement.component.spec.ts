import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveReimbursementComponent } from './approve-reimbursement.component';

describe('ApproveReimbursementComponent', () => {
  let component: ApproveReimbursementComponent;
  let fixture: ComponentFixture<ApproveReimbursementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveReimbursementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveReimbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
