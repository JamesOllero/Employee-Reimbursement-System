import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketStatusComponentComponent } from './ticket-status-component.component';

describe('TicketStatusComponentComponent', () => {
  let component: TicketStatusComponentComponent;
  let fixture: ComponentFixture<TicketStatusComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketStatusComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketStatusComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
