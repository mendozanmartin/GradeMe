import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { BrowseRoutingModule } from "./course-page-routing.module";
import { CoursePageComponent } from "./course-page.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        BrowseRoutingModule
    ],
    declarations: [
        CoursePageComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CoursePageModule { }
