import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Places } from 'src/app/models/places.model';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = [];
  
  public places:Places[];
  placeData:Places[];
 
  constructor(private fireStore : AngularFirestore,
              private alertService:AlertService
    ) {
   
    this.places= new Array<Places>();
    this.placeData= new Array<Places>();
   }

  ngOnInit() {
   this.fireStore.collection('places').snapshotChanges().subscribe( res => {
     this.places= res.map(e => {
      return {
        id:e.payload.doc.id,
        name:e.payload.doc.data()['name'],
        address:e.payload.doc.data()['address'],
        openingHours:e.payload.doc.data()['openingHours']

      }
    });
   
     
    });
  }
   
  public updated() {
    this.options = [];
    if (this.myControl.value.length > 0) {
     
      let searchedWord = this.myControl.value;
      for(let value in this.places) {
        let r = this.places[value]['name'].search(new RegExp(searchedWord, "i"));
        if (r != -1) {
          this.options.push(this.places[value]['name'])
          
        }
      }
    } else {
      this.options = []
    }
  }

  getSelectedPlace(place){
   
    this.placeData= this.places.filter(x=>x.name == place);
    
  }

  // save to fireStoreDatabase
  saveToCard(place){
    
    this.fireStore.collection('myPlaces').add(place).then(res=>{
        this.alertService.success('Card Saved','Card saved Successfully',null);
    }).catch(error => {
        console.log(error);
      })
  }
}
