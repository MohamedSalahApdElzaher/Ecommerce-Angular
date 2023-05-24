import { Injectable } from '@angular/core';
import {MessageService} from 'primeng/api';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private messageService: MessageService){ }

  setRoles(roles:[]){
    localStorage.setItem("roles", JSON.stringify(roles));
  }

  getRoles():any{
    return JSON.parse(localStorage.getItem('roles')!);
  }

  setToken(jwtToken:string){
    localStorage.setItem("jwtToken", jwtToken);
  }

  
  getToken(): string{
    return localStorage.getItem('jwtToken')!;
  }

  clear(){
    localStorage.clear();
    sessionStorage.clear();
    location.reload();
  }

  isLoggedIn(){
    return this.getRoles() && this.getToken();
  }

  public notify(type: string, msg: string) {
    this.messageService.add(
      {
        severity: type,
        summary: msg,
        detail: msg
      }
    );
  }

}
