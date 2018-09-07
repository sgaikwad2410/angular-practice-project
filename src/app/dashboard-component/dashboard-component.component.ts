import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {

  name = 'Anonymous';
  
  constructor(private user:UserService) { }

  ngOnInit() {
    this.name = this.user.userName;
    console.log("Is User Logged In: "+this.user.getUserLoggedIn());
  }

}
