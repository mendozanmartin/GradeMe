import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { CoursePageComponent } from "./course-page.component";

const routes: Routes = [
    { path: "", component: CoursePageComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class BrowseRoutingModule { }
