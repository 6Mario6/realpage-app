import { Component, OnInit, Input } from '@angular/core';
import { UserInterface } from '../../commons/interfaces/user.interface';

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

}
