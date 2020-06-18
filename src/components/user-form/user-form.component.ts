import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Location } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';
import { ROUTES } from '../../router/routes';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Input() title = '';

  public userForm: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private location: Location,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.userForm = this.formBuilder.group({
      UserName: ['', [Validators.required]],
      Password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  saveUser() {
    if (this.userForm.valid) {
      this.usersService.saveUser(this.userForm.value).subscribe(
        (response) => {
          this.openDialog();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'panel';
    dialogConfig.autoFocus = false;
    dialogConfig.data = 'add';
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
