import { Component, OnInit, Input } from '@angular/core';
import { ROUTES } from '../../router/routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title = '';
  public url = `/${ROUTES.HOME}`;
  constructor() { }

  ngOnInit() {
  }

}
