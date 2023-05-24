import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private service: UserService,
    private router: Router, private userAuthService: UserAuthService) { }

  signup(signupForm: NgForm) {
    if (signupForm.value.userName === '' || signupForm.value.firstName === ''
      || signupForm.value.lastName === '' || signupForm.value.password === ''){
        this.userAuthService.notify('error', 'Please fill all fields');
    } else {
      this.service.signup(signupForm.value).subscribe(
        (res) => {
          console.log(res)
          setTimeout(() => {
            this.userAuthService.notify('success', 'Registered successfully :)');
          }, 2000);
            this.router.navigate(["/login"])
        },
        (err: any) => {
          this.userAuthService.notify('error', err + ' :(');
        }
      )
    }
  }

}
