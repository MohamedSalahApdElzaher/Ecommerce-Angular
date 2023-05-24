import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from './services/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ecommerce';

  constructor( private userAuthService: UserAuthService,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.userAuthService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }

}
