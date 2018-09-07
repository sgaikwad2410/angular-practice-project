import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Angular World ';
  constructor(private user:UserService) { }

  ngOnInit() {
    console.log("Is User Logged In: "+this.user.getUserLoggedIn());
  }

}
