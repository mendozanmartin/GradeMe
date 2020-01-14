import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Couchbase } from 'nativescript-couchbase-plugin';
const database = new Couchbase('my-database');

@Component({
    selector: "Browse",
    templateUrl: "./course-page.component.html"
})
export class CoursePageComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    accessDatabase() {
        const person = database.query({
            select: []
        })

        console.log(person)
    }
}
