import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingInvitationsTableComponent } from './pending-invitations-table.component';

describe('PendingInvitationsTableComponent', () => {
  let component: PendingInvitationsTableComponent;
  let fixture: ComponentFixture<PendingInvitationsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingInvitationsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingInvitationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
