import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms'; 
import { AngularFireModule } from "@angular/fire";

import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from 'src/environments/environment';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireAuthModule}  from '@angular/fire/auth';
import { CommonModule } from "@angular/common";
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import { PrivateModule } from "./private/private.module";
import { ToastrModule } from 'ngx-toastr';
import { AlertService } from './services/alert.service';
import { LogService } from './services/log.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule, // cloud fire database
    FormsModule,
    CommonModule,
    PrivateModule,
   
  ],
  providers: [AlertService,LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
