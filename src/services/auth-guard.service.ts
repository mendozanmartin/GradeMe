import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import * as firebase from "nativescript-plugin-firebase";
import { PersistentSettings } from './persistent-settings.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: RouterExtensions) { }

  canActivate() {
    if (PersistentSettings.isLoggedIn()) {
      return true
    } else {
      this.router.navigate(["/login"])
      return false
    }
  }
  
  createAccount() {
  
  }
  
}
