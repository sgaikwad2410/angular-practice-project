import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Route} from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponentComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    ProfileComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,   
    RouterModule.forRoot([
      {
        path:'',
        component:LoginFormComponent
      },
      {
        path:'dashboard',
        canActivate:[AuthguardGuard],
        component:DashboardComponentComponent
      },
      {
        path:'profile',
        canActivate:[AuthguardGuard],
        component:ProfileComponent
      },
      {
        path:'contact',
        canActivate:[AuthguardGuard],
        component:ContactComponent
      }       
    ]),
    BrowserAnimationsModule    
  ],
  providers: [UserService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
