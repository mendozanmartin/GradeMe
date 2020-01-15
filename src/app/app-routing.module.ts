import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { AuthGuardService } from "~/services/auth-guard.service";
import { AdditionSequenceComponent } from "./addition-sequence/addition-sequence.component";
import { CoursePageComponent } from "./course-page/course-page.component";
import { CourseDistributionComponent } from "./course-distribution/course-distribution.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    {path: "login", component: LoginComponent},
    {path: "signup", component: SignupComponent},
    {path: "course-page", component: CoursePageComponent},
    {path: "course-distribution", component: CourseDistributionComponent},
    {path: "addition-sequence", component: AdditionSequenceComponent},
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule), canActivate: [AuthGuardService] },
    { path: "search", loadChildren: () => import("~/app/search/search.module").then((m) => m.SearchModule) },
    { path: "featured", loadChildren: () => import("~/app/featured/featured.module").then((m) => m.FeaturedModule) },
    { path: "settings", loadChildren: () => import("~/app/settings/settings.module").then((m) => m.SettingsModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
