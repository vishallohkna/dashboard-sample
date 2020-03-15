import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styleUrls: ['./members-table.component.scss']
})

export class MembersTableComponent implements OnInit {

  public page: number = 1;
  public pageSize: number = 5;
  public customArray: any;

  constructor() { }

  ngOnInit() {
  	this.customArray = new Array(15);
  }

}
