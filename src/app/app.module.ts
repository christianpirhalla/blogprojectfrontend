import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BlogpostPanelComponent } from './blogpost-panel/blogpost-panel.component';
import { BlogpostFullviewComponent } from './blogpost-fullview/blogpost-fullview.component';
import { TagbarComponent } from './tagbar/tagbar.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BlogpostPanelListComponent } from './blogpost-panel-list/blogpost-panel-list.component';
import { NavbarLoggedInComponent } from './navbar-logged-in/navbar-logged-in.component';
import { NavbarPublicComponent } from './navbar-public/navbar-public.component';
import { SignupComponent } from './signup/signup.component';
import { NgxWebstorageModule } from 'ngx-webstorage';

@NgModule({
  declarations: [
    AppComponent,
    BlogpostPanelComponent,
    BlogpostFullviewComponent,
    TagbarComponent,
    LoginComponent,
    LogoutComponent,
    BlogpostPanelListComponent,
    NavbarLoggedInComponent,
    NavbarPublicComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
