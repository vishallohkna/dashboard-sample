import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-invitations-table',
  templateUrl: './pending-invitations-table.component.html',
  styleUrls: ['./pending-invitations-table.component.scss']
})

export class PendingInvitationsTableComponent implements OnInit {

  public page: number = 1;
  public pageSize: number = 5;
  public customArray: any;

  constructor() { }

  ngOnInit() {
  	this.customArray = new Array(15);
  }

}
