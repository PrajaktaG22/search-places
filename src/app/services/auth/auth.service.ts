import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: Observable<firebase.User>;
  user:any;
  constructor(private angularFireAuth: AngularFireAuth) {
  // this.userData = angularFireAuth.authState;
  this.angularFireAuth.authState.subscribe(user => {
    if (user){
      this.user = user;
      localStorage.setItem('user', JSON.stringify(this.user));
    } else {
      localStorage.setItem('user', null);
    }
  })

  }


getUser(){
  this.user = JSON.parse(localStorage.getItem("user"));
  return this.user;
}
/* Sign up */
SignUp(email: string, password: string) {
 return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
  }
   
  /* Sign in */
  SignIn(email: string, password: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
  }
   
  /* Sign out */
  SignOut() {
      this.angularFireAuth.auth.signOut();
  }
  getAuth() { 
    return this.angularFireAuth.auth; 
  } 
  /** 
   * Initiate the password reset process for this user 
   * @param email email of the user 
   */ 
  resetPasswordInit(email: string) { 
    return this.angularFireAuth.auth.sendPasswordResetEmail(
      email, 
      { url: 'http://localhost:4200/login' }); 
    } 
  
}
