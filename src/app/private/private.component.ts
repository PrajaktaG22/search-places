import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {
  selectedSideMenuItem:number;
  constructor( private router :Router,private authService:AuthService) { }

  ngOnInit() {

  }

  home(){
    this.selectedSideMenuItem == 1;
    this.router.navigate(['private/home']);
  }
  myPlaces(){
    this.selectedSideMenuItem == 2;
    this.router.navigate(['private/myPlaces']);
  }
  profile(){
    this.selectedSideMenuItem == 3;
    this.router.navigate(['private/profile']);
  }
  signOut(){
    this.selectedSideMenuItem == 4;
    this.authService.SignOut();
   
    this.router.navigate(['login']);
  }
}
