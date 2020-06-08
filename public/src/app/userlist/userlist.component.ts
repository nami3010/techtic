import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  @Input() data;
  UserArray= [];
  constructor() { }

  ngOnInit(): void {
    this.UserArray= this.data
  }

}

