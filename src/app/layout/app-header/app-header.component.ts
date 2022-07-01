import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.sass']
})
export class AppHeaderComponent{
  sidebarIsVisible: boolean = false;
  constructor(public router: Router,) { }

  checkRouteIsActive = (path: string) => {
    return path === this.router.url;
  }

  goTo = (path: string) => {
    this.sidebarIsVisible = false;
    this.router.navigate([path]);
  }

  backToHome = () => {
    this.router.navigate(['/']);
  }

}
