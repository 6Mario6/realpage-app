import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Location } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';
import { ROUTES } from '../../router/routes';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { UserInterface } from 'src/commons/interfaces/user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit, OnChanges  {
  @Input() title = '';
  @Input() user;
  public userForm: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private location: Location,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    this.setForm();
  }

  setForm() {
    this.userForm = this.formBuilder.group({
      UserName: [this.user && this.user.UserName ? this.user.UserName : '', [Validators.required]],
      Password: [this.user && this.user.Password ? this.user.Password : '', [Validators.required, Validators.minLength(8)]],
    });
  }

  saveUser() {
    if (this.userForm.valid) {
      if (this.user) {
        this.update();
      } else  {
        this.save();
      }
    }
  }

  save()  {
    this.usersService.saveUser(this.userForm.value).subscribe(
      (response) => {
        this.usersService.addNewUser(response);
        this.openDialog('add');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  update() {
    this.usersService.updateUser( this.user.ID, this.userForm.value).subscribe(
      (response: UserInterface) => {
     //   this.usersService.
        const userIndex = this.usersService.getUsers().findIndex(user => user.ID === this.user.ID);
        if(userIndex !== -1) {
          this.usersService.getUsers()[userIndex] = {ID: this.user.ID, UserName: response.UserName, Password: response.Password};
        }
        this.openDialog('update');

      },
      (error) => {
        console.log(error);
      }
    );
  }

  openDialog(type) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'panel';
    dialogConfig.autoFocus = false;
    dialogConfig.data = type;
    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      this.router.navigate([
        `${ROUTES.HOME}`,
      ]);
    });
  }

  cancel() {
    this.userForm.reset();
    this.location.back();
  }
}
