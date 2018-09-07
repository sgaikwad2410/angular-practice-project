import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private isUserLoggedIn;
public userName;

  constructor() { 
    this.isUserLoggedIn = false;
  }
  
  setUserLoggedIn(){
    this.isUserLoggedIn = true; 
    this.userName = 'Suraj';
  }

  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
}
