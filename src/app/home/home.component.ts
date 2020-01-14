import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";
import { Couchbase, ConcurrencyMode } from 'nativescript-couchbase-plugin';
const database = new Couchbase('my-database');

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(private router: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    addGPA() { //execute addCourse() or addTerm() sequence
        this.router.navigate(["addition-sequence"], {transition: {name: "fade", duration: 500, curve: "ease"}})
    }

    navigateToCourse() {
        this.router.navigate(["course-page"], {transition: {name: "slide", duration:500, curve: "ease"}})
    }

    createPerson() {
        const documentId = database.createDocument({
            "firstname": "O",
            "lastname": "Fortune",
            "address": {
                "country": "Trinidad and Tobago"
            },
            "twitter": "https://www.twitter.com/triniwiz"
        });

    }

    readPerson() {
        const person = database.query({
            select: []
        })

        console.log(person)
    }

}
