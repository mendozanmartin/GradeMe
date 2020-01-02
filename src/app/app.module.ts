import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdditionSequenceComponent } from './addition-sequence/addition-sequence.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { AuthGuardService } from "~/services/auth-guard.service";
import { AuthService } from "~/services/auth.service";
import { FirestoreService } from "~/services/firestore.service";
import { InternalStorageService } from "~/services/internal-storage.service";
import { PersistentSettings } from "~/services/persistent-settings.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        AdditionSequenceComponent,
        CoursePageComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [AuthGuardService, AuthService, FirestoreService, InternalStorageService, PersistentSettings]
})
export class AppModule { }
