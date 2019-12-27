import { Injectable } from '@angular/core';
import { ModalDialogService } from 'nativescript-angular/common';
const firebase = require("nativescript-plugin-firebase");
import * as dialogs from "tns-core-modules/ui/dialogs";


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  signup() {
    firebase.createUser({
      email: 'eddyverbruggen@gmail.com',
      password: 'firebase'
    }).then(
        function (user) {
          dialogs.alert({
            title: "User created",
            message: "email: " + user.email,
            okButtonText: "Nice!"
          })
        },
        function (errorMessage) {
          dialogs.alert({
            title: "No user created",
            message: errorMessage,
            okButtonText: "OK, got it"
          })
        }
    );
  }
}
