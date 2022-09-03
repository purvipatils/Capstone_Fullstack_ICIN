import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EnableService } from './service/enable.service';
import { DisableService } from './service/disable.service';
import { UserAccountComponent } from './user-account/user-account.component';
import { CheckbookRequestsComponent } from './checkbook-requests/checkbook-requests.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorizeRegistrationComponent } from './authorize-registration/authorize-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserAccountComponent,
    CheckbookRequestsComponent,
    AuthorizeRegistrationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule    
  ],
  providers: [EnableService, DisableService,],
  bootstrap: [AppComponent]
})
export class AppModule { }