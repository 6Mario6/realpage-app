import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from '../pages/home/home.component';
import { HeaderComponent } from '../components/header/header.component';
import { ListUsersComponent } from '../components/list-users/list-users.component';
import { UserComponent } from '../components/user/user.component';
import { UserFormComponent } from '../components/user-form/user-form.component';
import { ViewUserComponent } from '../components/view-user/view-user.component';
import { ViewPageComponent } from '../pages/view-page/view-page.component';

import { UsersService } from '../services/users.service';
import { HeadersInterceptor } from '../commons/interceptors/header.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ListUsersComponent,
    UserComponent,
    UserFormComponent,
    ViewUserComponent,
    ViewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    UsersService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HeadersInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
