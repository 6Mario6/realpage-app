import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { UserInterface } from 'src/commons/interfaces/user.interface';


@Component({
  selector: 'app-edit-form-page',
  templateUrl: './edit-form-page.component.html',
  styleUrls: ['./edit-form-page.component.scss']
})
export class EditFormPageComponent implements OnInit {
  public user: UserInterface;
  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getUserByID(params.id);
    });
  }

  getUserByID(id) {
    this.usersService.getUserByID(id).subscribe(
      (response: UserInterface) => {
        this.user = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
