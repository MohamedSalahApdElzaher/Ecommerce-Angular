import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/services/product.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

  langs: any[];

  selectedLang: any;

  constructor(private product_service: ProductService, private service: UserAuthService,
    private router: Router, public usreService: UserService,
    private messageService: MessageService,
    private translate: TranslateService) {
    
     }

  ngOnInit(): void {
  
  }

  getUserName(){
    return localStorage.getItem('username');
  }

  isLoggedIn() {
    return this.service.isLoggedIn();
  }

  logout() {
    this.service.notify('warn', 'Logged out Successfully');
     setTimeout(() => {
      this.service.clear();
      this.router.navigate(["/login"]);
     }, 2000);
  }

  login() {
    this.router.navigate(['/login']);
  }

  signup() {
    this.router.navigate(['/signup']);
  }

  generateReport() {
    this.product_service.getReportFile()
  }

  changeLanguage(event: any){
      this.translate.use(event.target.value);
  }



}