import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  constructor() { }
  addUser(user:any){
    let users = []
    let jigul = localStorage.getItem('Users')
    if (jigul){
      users = JSON.parse(jigul);
      users = [user, ...users]
    } else{
      users = [user]
    }
    localStorage.setItem('Users', JSON.stringify(users) )
  }
}
