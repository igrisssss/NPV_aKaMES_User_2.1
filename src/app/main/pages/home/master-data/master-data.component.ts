import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-master-data',
  templateUrl: './master-data.component.html',
  styleUrls: ['./master-data.component.css']
})
export class MasterDataComponent implements OnInit {
  _title: string = "MASTER DATA";

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
    ]
  }

}
