import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule ,ReactiveFormsModule} from '@angular/forms'; 
import { MaterialModule } from './../material.module';
import { MatSortModule, MatIconModule, MatSelectModule,MatListModule, MatExpansionModule, MatSnackBarModule,MatCheckboxModule, MatFormFieldModule, MatAutocompleteModule, MatInputModule,MatButtonModule} from '@angular/material';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MyPlacesComponent } from './my-places/my-places.component';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
   
    PrivateComponent,
    HomeComponent,
    ProfileComponent,
    MyPlacesComponent
  ],
  imports: [
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBKwzhQhkwpHvGjWfUt7c3JxbYyLq4r5dg',
      libraries: ['places']
    }),
    FormsModule,
    ReactiveFormsModule,
    PrivateRoutingModule,
    MatIconModule,
    CommonModule,MatInputModule,
    MatAutocompleteModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule,

  ],
  providers: [],
  bootstrap: []
})
export class PrivateModule { }
