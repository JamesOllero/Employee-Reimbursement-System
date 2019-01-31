import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementCreatorComponent } from './reimbursement-creator.component';

describe('ReimbursementCreatorComponent', () => {
  let component: ReimbursementCreatorComponent;
  let fixture: ComponentFixture<ReimbursementCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReimbursementCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbursementCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
