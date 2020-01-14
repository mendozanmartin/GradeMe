import { Injectable } from '@angular/core';
import { Couchbase } from 'nativescript-couchbase-plugin';
const database = new Couchbase('my-database');

@Injectable({
  providedIn: 'root'
})
export class InternalStorageService {

  constructor() { }

  createDocument(name: string) {
    return database.createDocument(name)
  }

  deleteDocument(name: string) {
    return database.deleteDocument(name)
  }

  getDocument(name: string) {
    return database.getDocument(name)
  }




   
}
