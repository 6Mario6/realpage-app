import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserInterface } from '../../commons/interfaces/user.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss']
})
export class ViewPageComponent implements OnInit {
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
