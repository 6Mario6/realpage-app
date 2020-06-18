import { Component, OnInit, Input } from '@angular/core';
import { UserInterface } from '../../commons/interfaces/user.interface';
import { ROUTES } from '../../router/routes';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: UserInterface ;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToViewUser(user) {
    this.router.navigate([
      `${ROUTES.USER}/${user.ID}`,
    ]);
  }

  goToViewEdit(user) {
    this.router.navigate([
      `${ROUTES.EDIT_USER}/${user.ID}`,
    ]);
  }

}
