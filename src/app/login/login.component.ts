import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isOpen: boolean =true;
  isForgotPassword :boolean= false;
  isRegister :boolean=false;
  user:any =[];
  items :Observable<any[]>
  msg: string;
  email:string;
  constructor(private authService:  AuthService, private  angularFireAuth:  AngularFireAuth, 
    public  router:  Router, 
    private db:AngularFireDatabase) { 
    
     

  }

  ngOnInit(){}

  onForgotPassword(){
    this.isForgotPassword = true;
    this.isOpen = false;
    this.isRegister = false
  }

  onClickRegister(){
    this.isRegister = true;
    this.isForgotPassword = false;
    this.isOpen = false;
  }
  onLoginClick(){
    this.isOpen = true;
    this.isRegister = false;
    this.isForgotPassword = false;
   
  }
 
  onLoginClicked(form:NgForm){
    let data:any = form;
    this.email = data.email;
    this.authService.SignIn(data.email, data.password)
    .then(res => {
      console.log('login Successfully signed up!', res);
      // this.db.list('users').push(form)
      this.msg = "login Succsesful .";
      this.router.navigate(['private/home']);
      })
      .catch(error => {
      console.log('Something is wrong:',this.msg = error.message);
      });  
  }

  onRegisterClicked(form:NgForm){
    let data:any = form;
    this.authService.SignUp(data.email, data.password)
    .then(res => {
      console.log('You are Successfully signed up!', res);
      this.msg = "Register Succsesful .";
      this.isOpen =true;
      this.isForgotPassword = false;
      this.isRegister = false;
      this.db.list('users').push(form)
      })
      .catch(error => {
      console.log('Something is wrong:',this.msg = error.message);
      });  
  }

  forgotPassword(user) { 
    if (!user.email) { 
      alert('Type in your email first'); 
    }
    this.authService.resetPasswordInit(user.email) 
    .then(
      () => alert('A password reset link has been sent to your email address'), (rejectionReason) => alert(rejectionReason)) 
    .catch(e => alert('An error occurred while attempting to resetyour password')); 
  }

  

 

}












