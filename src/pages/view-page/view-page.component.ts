import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserInterface } from '../../commons/interfaces/user.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { ROUTES } from '../../router/routes';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss'],
})
export class ViewPageComponent implements OnInit {
  public user: UserInterface;
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.getUserByID(params.id);
    });
  }

  getUserByID(id) {
    this.usersService.getUserByID(id).subscribe(
      (response: UserInterface) => {
        this.user = response;
      },
      (error) => {
        this.errorService();
      }
    );
  }

  errorService() {
    this.openDialog();
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'panel';
    dialogConfig.autoFocus = false;
    dialogConfig.data = 'error';
    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      this.router.navigate([`${ROUTES.HOME}`]);
    });
  }
}
