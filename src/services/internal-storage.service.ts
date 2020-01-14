import { Injectable } from '@angular/core';
import { Couchbase } from 'nativescript-couchbase-plugin';
const coursesDatabase = new Couchbase('courses');
const termsDatabase = new Couchbase('terms')

@Injectable({
  providedIn: 'root'
})
export class InternalStorageService {

  constructor() { }

  createCourse(name: string) {
    return coursesDatabase.createDocument(name)
  }

  deleteCourse(name: string) {
    return coursesDatabase.deleteDocument(name)
  }

  getCourse(name: string) {
    return coursesDatabase.getDocument(name)
  }

  createTerm(name: string) {
    return termsDatabase.createDocument(name)
  }

  deleteTerm(name: string) {
    return termsDatabase.deleteDocument(name)
  }

  getTerm(name: string) {
    return termsDatabase.getDocument(name)
  }

}
