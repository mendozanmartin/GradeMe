import { Injectable } from '@angular/core';
import { getString, setString } from "tns-core-modules/application-settings";

@Injectable({
  providedIn: 'root'
})
export class PersistentSettings {

  constructor() { }

  
  static isLoggedIn(): boolean {
    return !!getString("token");    // get truthy value of string
  }

  //userID
  static get token(): string {
    return getString("token");
  }

  static set token(theToken: string) {
    setString("token", theToken);
  }

}
