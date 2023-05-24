import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  month: any = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  date = new Date().getFullYear() +
    ' | ' + this.month[new Date().getMonth()]
    + ' | ' + new Date().getDate();


  getUserName() {
    return localStorage.getItem('username');
  }
  getUserFirstName() {
    return localStorage.getItem('fname');
  }
  getUserLastName() {
    return localStorage.getItem('lname');
  }

}
