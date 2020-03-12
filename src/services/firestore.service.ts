import { Injectable } from "@angular/core";
import * as firebase from "nativescript-plugin-firebase";
import { User } from "~/models/user.model";
import { InternalStorageService } from "./internal-storage.service";
import { Course } from "~/models/course.model";
import { PersistentSettings } from "./persistent-settings.service";

@Injectable({
    providedIn: "root"
})
export class FirestoreService {
    private usersCollection: firebase.firestore.CollectionReference;
    private coursesCollection: firebase.firestore.CollectionReference;

    constructor(private storage: InternalStorageService) {
        this.usersCollection = firebase.firestore.collection("Users");
        this.coursesCollection = firebase.firestore.collection("Courses");
    }

    updateUser(user: User) {
        this.usersCollection.doc(user.uid).set({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            uid: user.uid
        });
    }

    updateStorageCourses(uid: String) {
        const query = this.coursesCollection.where("uid", "==", uid);
        query
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.storage.syncCourses(doc.data());
                });
            })
            .catch(console.error);
    }

    addCourse(course: Course) {
        //finish this function
        return this.coursesCollection
            .doc(course.cid)
            .set(course)
            .then(data => {
                console.log(data);
            });
    }
    addWeightedGrade() {}
}
