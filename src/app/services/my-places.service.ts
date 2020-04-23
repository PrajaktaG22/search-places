import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class MyPlacesService {

  constructor(private fireStore:AngularFirestore) { }

  readPlaces(){
    return this.fireStore.collection('myPlaces').snapshotChanges();
  }

  updatePlace(place,id){
   return this.fireStore.doc('myPlaces/' + id).update(place);
  }
  deletePlace(placeId){
    return this.fireStore.doc('myPlaces/' + placeId).delete();
  }
}
