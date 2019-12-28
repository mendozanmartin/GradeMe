import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import * as firebase from "nativescript-plugin-firebase";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  canActivate() {
    return true
  }

  constructor() { }
  
  createAccount() {
  
  }
  
}
