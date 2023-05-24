import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';
import * as bcrypt from "bcryptjs";
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService, private userAuthService: UserAuthService,
    private router: Router,
    ) { 
         //translate.setDefaultLang('ar');
    }

  ngOnInit(): void {
    if (this.userAuthService.isLoggedIn()) {
      this.router.navigate(['/products']);
    }
  }

  login(loginForm: NgForm) {
    if (loginForm.value.user_name === '' || loginForm.value.user_password === '') {
      this.userAuthService.notify('error', 'Please fill all fields');
    } else {
      this.service.login(
     loginForm.value
      ).subscribe(
        (res: any) => {
          console.log( res.jwtToken);
          this.userAuthService.notify('success', 'LoggedIn successfully :)');
          this.userAuthService.setToken(res.jwtToken);
          this.userAuthService.setRoles(res.user.roles);
          localStorage.setItem('username', res.user.userName);
          localStorage.setItem('fname', res.user.firstName);
          localStorage.setItem('lname', res.user.lastName);
          localStorage.setItem('token', res.jwtToken);
          if (res.user.roles[0].roleName == "ADMIN_ROLE") {
            setTimeout(() => {
              this.router.navigate(["/admin"]);
            }, 2000);
          }
          else {
            setTimeout(() => {
               this.router.navigate(["/user"]);
            }, 2000);
          }
          setTimeout(() => {
            location.reload();
          }, 2000);
        },
        (err: any) => {
          this.userAuthService.notify('error', err.error.message + ' :(');
        }
      )
    }
  }

}
