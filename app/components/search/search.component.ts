import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router, private userAuthService: UserAuthService) { }

  ngOnInit() {
  }

  doSearch(value: string) {
    if (!this.userAuthService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }else{
      console.log(`value=${value}`);
      this.router.navigateByUrl(`/search/${value}`);
    }
  }
}
