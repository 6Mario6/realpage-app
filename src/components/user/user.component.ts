import { Component, OnInit, Input } from '@angular/core';
import { UserInterface } from '../../commons/interfaces/user.interface';
import { ROUTES } from '../../router/routes';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: UserInterface ;

  constructor() { }

  ngOnInit() {
  }

  getUrl(user) {
    return `${ROUTES.USER}/${user.ID}`;
  }

}
