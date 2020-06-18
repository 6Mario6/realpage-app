import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserInterface } from '../../commons/interfaces/user.interface';
import { ROUTES } from '../../router/routes';
import { Router } from '@angular/router';

@Component({
  selector: "app-list-users",
  templateUrl: "./list-users.component.html",
  styleUrls: ["./list-users.component.scss"],
})
export class ListUsersComponent implements OnInit {
  @Input() title = '';
  public users: Array<UserInterface> = [];

  constructor(private usersService: UsersService , private router: Router) {}

  ngOnInit() {
    this.getListUsers();
  }

  getListUsers() {
    this.usersService.getUsers().subscribe(
      (response: Array<UserInterface>) => {
        this.users = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addUser() {
    this.router.navigate([
      `${ROUTES.ADD_USER}`,
    ]);
  }

}
