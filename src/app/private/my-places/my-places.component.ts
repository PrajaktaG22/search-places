import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Places } from 'src/app/models/places.model';
import { AlertService } from 'src/app/services/alert.service';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MyPlacesService } from 'src/app/services/my-places.service';
@Component({
  selector: 'app-my-places',
  templateUrl: './my-places.component.html',
  styleUrls: ['./my-places.component.css']
})
export class MyPlacesComponent implements OnInit {
  public myPlaces:Places[];
  place_form :FormGroup;
  selectedPlace:Places;
  isEditPlace:boolean;
  constructor(private fireStore : AngularFirestore,
    private alertService:AlertService,
    private formBuilder:FormBuilder,
    private myPlacesService :MyPlacesService
    ) {
      this.myPlaces = new Array<Places>();
      this.selectedPlace= new Places();
    }

  ngOnInit() {

    this.place_form = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      address: new FormControl("", [Validators.required]),
      openingHours: new FormControl("", [Validators.required]),
   
    });
    this.myPlacesService.readPlaces().subscribe( res => {
      this.myPlaces= res.map(e => {
       return {
         id:e.payload.doc.id,
         name:e.payload.doc.data()['name'],
         address:e.payload.doc.data()['address'],
         openingHours:e.payload.doc.data()['openingHours']
 
       }
     });
     console.log(this.myPlaces);
      
     });
  }

  get formControls() {
    return this.place_form.controls;
  }
  get form() {
    return this.place_form;
  }
  //edit form 
  placeForm(formDirective){
    
    let placeId = this.selectedPlace.id;
    this.selectedPlace.name=this.formControls.name.value;
    this.selectedPlace.address=this.formControls.address.value;
    this.selectedPlace.openingHours=this.formControls.openingHours.value;

    this.myPlacesService.updatePlace(this.selectedPlace,placeId).then(res=>{
     
        this.alertService.success("Place Updated","Place Updated successfully",null);
        this.isEditPlace= false;
      })
      .catch(error=>{
        this.alertService.failure(0,"update failed","Failed to update failed",error);
  
    });
  }
  // edit place
  editPlace(place){
    this.isEditPlace=  true;
   
    this.selectedPlace = this.myPlaces.find(x=>x.id == place.id);
    this.place_form.patchValue({
      name: this.selectedPlace.name,
      address: this.selectedPlace.address,
      openingHours: this.selectedPlace.openingHours
     
    });
  }
  // Delete Place from fireDatabase
  deletePlace(placeId){
   this.myPlacesService.deletePlace(placeId).then(res=>{
      this.alertService.success("Card Deleted","Place Deleted successfully from myPlaces",null);
    }).catch(error=>{
      this.alertService.failure(0,"Delete failed","Failed to delete card",error);
    })
   
  }
  cancel(){
    this.isEditPlace = false;
  }

}
