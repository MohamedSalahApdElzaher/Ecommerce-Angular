import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { environment } from 'src/environments/environment';
import { BaseAPIService } from './BaseApiService';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseAPIService {

  constructor(public override http: HttpClient, private service: UserAuthService) { 
    super(http);
  }

  login(loginData: any) {
    return this.http.post(
      environment.loginUrl,
      loginData,
      { headers: environment.request_header })
  }

  signup(signupData: any) {
    return this.http.post(
      environment.registerUrl,
      signupData,
      { headers: environment.request_header })
  }

  public roleMatch(allowedRoles: any[]) {
    let isMatch = false;
    const userRoles: any = this.service.getRoles();
    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
    return isMatch;
  }


}
