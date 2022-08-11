import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-user-add-new',
  templateUrl: './user-add-new.component.html',
  styleUrls: ['./user-add-new.component.css']
})
export class UserAddNewComponent implements OnInit {
  _title: string = "ADD NEW USER";

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
        label:'ADD NEW USER',
        routerLink: '/home/master-data/user/add-new'
      },
    ]
  }

}
