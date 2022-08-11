import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  _title: string = "EDIT USER";
  public items!: MenuItem[];

  constructor() { }

  ngOnInit()
  {
    this.items = 
    [
      {
        label:'HOME',
        routerLink: '/home'
      },
      {
        label:'MASTER DATA',
        routerLink: '/home/master-data'
      },
      {
        label:'USER',
        routerLink: '/home/master-data/user'
      },
      {
        label:'EDIT USER',
        routerLink: '/home/master-data/user/edit'
      },
    ]
  }

}
