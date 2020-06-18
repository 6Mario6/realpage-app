import { Component, OnInit, Input } from '@angular/core';
import { UserInterface } from '../../commons/interfaces/user.interface';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialogConfig } from '@angular/material';
import { MatDialog } from '@angular/material';
import { ROUTES } from '../../router/routes';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  @Input() title = '';
  @Input() user: UserInterface;
  constructor(private dialog: MatDialog, private router: Router, private usersService: UsersService) { }

  ngOnInit() {
  }

  goToViewEdit() {
    this.router.navigate([
      `${ROUTES.EDIT_USER}/${this.user.ID}`,
    ]);
  }

  deletUserByID() {
    this.usersService.deleteUserByID(this.user.ID).subscribe((response) => {
      this.openDialog();
    }, (error) => {
      console.log(error);
    });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'panel';
    dialogConfig.autoFocus = false;
    dialogConfig.data = 'delete';
    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      this.router.navigate([
        `${ROUTES.HOME}`,
      ]);
    });
  }

}
