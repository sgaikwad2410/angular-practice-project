import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ LoginFormComponent],
     });
    component = TestBed.get(LoginFormComponent);
 }));
 });
