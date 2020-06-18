import { Component, OnInit, Input } from '@angular/core';
import { ROUTES } from '../../router/routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate([
      `${ROUTES.HOME}`,
    ]);
  }

}
