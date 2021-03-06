import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent } from '../app/login/login.component'


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
   path: 'login' ,component:LoginComponent
  },
  {
    path: "private",
    loadChildren: "./private/private.module#PrivateModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
