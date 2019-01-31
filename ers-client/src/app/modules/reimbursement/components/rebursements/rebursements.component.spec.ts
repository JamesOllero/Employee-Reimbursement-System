import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebursementsComponent } from './rebursements.component';

describe('RebursementsComponent', () => {
  let component: RebursementsComponent;
  let fixture: ComponentFixture<RebursementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebursementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebursementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
