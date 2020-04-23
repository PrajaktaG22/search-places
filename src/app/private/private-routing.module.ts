import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MyPlacesComponent } from './my-places/my-places.component';
import { ProfileComponent } from './profile/profile.component';
import { PrivateComponent } from './private.component';

const privateRoutes: Routes = [
  {
    path: "",
    component: PrivateComponent,
    
    children: [
      {
        path: "private/home",
        component: HomeComponent
      },
      {
        path: "private/myPlaces",
        component: MyPlacesComponent
      },
      {
        path: "private/profile",
        component: ProfileComponent
      },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(privateRoutes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
