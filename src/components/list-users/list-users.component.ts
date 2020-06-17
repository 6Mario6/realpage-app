import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserInterface } from '../../commons/interfaces/user.interface';
import { ROUTES } from '../../router/routes';

@Component({
  selector: "app-list-users",
  templateUrl: "./list-users.component.html",
  styleUrls: ["./list-users.component.scss"],
})
export class ListUsersComponent implements OnInit {
  @Input() title = '';
  public users: Array<UserInterface> = [];
  public url  =  `${ROUTES.ADD_USER}`;
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getListUsers();
  }

  getListUsers() {
    this.usersService.getUsers().subscribe(
      (response: Array<UserInterface>) => {
        this.users = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
