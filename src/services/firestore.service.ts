import { Injectable } from '@angular/core';
import * as firebase from "nativescript-plugin-firebase";
import { User } from '~/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private usersCollection: firebase.firestore.CollectionReference;

  constructor() { 
    this.usersCollection = firebase.firestore.collection("Users");
  }

  updateUser(user: User) {
    this.usersCollection.doc(user.uid).set({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      uid: user.uid
    })
  }
}
