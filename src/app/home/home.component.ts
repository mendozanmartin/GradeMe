import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";
import { FirestoreService } from "~/services/firestore.service";
import { PersistentSettings } from "~/services/persistent-settings.service";
import { InternalStorageService } from "~/services/internal-storage.service";
import { Course } from "~/models/course.model";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    public courses: Array<Course>;

    constructor(
        private router: RouterExtensions,
        private firestore: FirestoreService,
        private storage: InternalStorageService
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.firestore.updateStorageCourses(PersistentSettings.token);
        this.courses = this.storage.getCourses();
        console.log(this.courses);
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    addGPA() {
        //execute addCourse() or addTerm() sequence
        this.router.navigate(["addition-sequence"], {
            transition: { name: "fade", duration: 500, curve: "ease" }
        });
    }

    navigateToCourse() {
        this.router.navigate(["course-page"], {
            transition: { name: "slide", duration: 500, curve: "ease" }
        });
    }
}
