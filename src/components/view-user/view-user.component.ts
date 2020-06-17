import { Component, OnInit, Input } from '@angular/core';
import { UserInterface } from '../../commons/interfaces/user.interface';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  @Input() title = '';
  @Input() user: UserInterface;
  constructor() { }

  ngOnInit() {
  }

}
