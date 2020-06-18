import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from '../components/header/header.component';
import { ListUsersComponent } from '../components/list-users/list-users.component';
import { UserComponent } from '../components/user/user.component';
import { UserFormComponent } from '../components/user-form/user-form.component';
import { ViewUserComponent } from '../components/view-user/view-user.component';
import { DialogComponent } from '../components/dialog/dialog.component';
import { HomeComponent } from '../pages/home/home.component';
import { ViewPageComponent } from '../pages/view-page/view-page.component';
import { FormPageComponent } from '../pages/form-page/form-page.component';
import { EditFormPageComponent } from '../pages/edit-form-page/edit-form-page.component';

import { UsersService } from '../services/users.service';
import { HeadersInterceptor } from '../commons/interceptors/header.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ListUsersComponent,
    UserComponent,
    UserFormComponent,
    ViewUserComponent,
    ViewPageComponent,
    FormPageComponent,
    DialogComponent,
    EditFormPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [
    UsersService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HeadersInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogComponent
  ]
})
export class AppModule { }
