import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _title: string = "HOME";
  public items!: MenuItem[];

  constructor() { }

  ngOnInit()
  {
    this.items = 
    [
      {
        label:'HOME',
        routerLink: '/home'
      }
    ]
  }

}
