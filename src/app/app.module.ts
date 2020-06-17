import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from '../pages/home/home.component';
import { HeaderComponent } from '../components/header/header.component';
import { ListUsersComponent } from '../components/list-users/list-users.component';
import { UserComponent } from '../components/user/user.component';
import { UserFormComponent } from '../components/user-form/user-form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ListUsersComponent,
    UserComponent,
    UserFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
