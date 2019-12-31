import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { AuthService } from "~/services/auth.service";
import { PersistentSettings } from "~/services/persistent-settings.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Settings",
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {

    constructor(private auth: AuthService, private router: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    logout() {
        this.auth.signOut().then(data=> {
            console.log(data)
            PersistentSettings.token = ""
            this.router.navigate(["/login"])
        });

    }
}
