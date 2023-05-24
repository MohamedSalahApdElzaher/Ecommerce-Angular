import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private service: UserAuthService, private router: Router, public usreService: UserService){  }

  isLoggedIn(){
    return this.service.isLoggedIn();
  }

  logout(){
    this.service.clear();
    this.router.navigate(["/home"]);
  }

}
