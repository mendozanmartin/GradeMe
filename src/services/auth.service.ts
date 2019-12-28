import { Injectable } from '@angular/core';
import * as firebase from "nativescript-plugin-firebase";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { User } from '~/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  createUser(user: User, password: string) {
    firebase.createUser({
      email: user.email,
      password: password
    }).then(
        function (account) {
          dialogs.alert({
            title: "User created",
            message: "email: " + account.email,
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
