import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'saas_frontend';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  isLoginPage(): boolean {
    // Check if the current route is the login page
    return this.router.url.includes('/login');
  }
  isRegisterPage(): boolean {
    // Check if the current route is the register page
    return this.router.url.includes('/register');
  }
}
