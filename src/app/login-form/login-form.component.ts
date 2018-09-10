import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor( private router:Router,private user:UserService) { }
 
  form;
  isTrue = false;
  warning;

  ngOnInit(){
    this.form = new FormGroup({
    userId: new FormControl("",Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ])),
    userPassword: new FormControl("",Validators.compose([
      Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')
    ])),
  });
}
  h2Heading = 'LOGIN';
  paragraph = 'Please enter userId and password';
  forgotPassword = 'Forgot password?';

  onSubmit = function(user){
    
    console.log(user);
    if(user.userId=='admin' && user.userPassword=='Admin@123'){
      console.log("You are a Valid User");
      this.user.setUserLoggedIn();
      this.router.navigate(['dashboard']);
    }
    else{
      console.log("You are not a Valid User");
      this.isTrue = true;
      this.warning = 'Please Enter Valid UserId Or Password';
    }
  }
}
