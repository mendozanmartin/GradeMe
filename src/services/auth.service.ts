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
    return firebase.createUser({
      email: user.email,
      password: password
    }).then(
        function (account) {
          dialogs.alert({
            title: "User created",
            message: "email: " + account.email,
            okButtonText: "Nice!"
          })
          return account.uid
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

  authenticate(email: string, password: string) {
      return firebase.login(
      {
        type: firebase.LoginType.PASSWORD,
        passwordOptions: {
          email: email,
          password: password
        }
      })
      .then(result => {
        return {isSuccessful: true, uid: result.uid}
      })
      .catch(error => {
        dialogs.alert({
          title: "Error",
          message: error,
          okButtonText: "Ok, got it"
        })
        return {isSuccessful: false, uid: undefined}
      });  
    }
}
