import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { Course } from "~/models/course.model";

@Component({
    selector: "Browse",
    templateUrl: "./course-page.component.html"
})
export class CoursePageComponent implements OnInit {
    public course: Course;
    public progressPercent: number = 0;
    public currentGrade: number = 0;
    constructor(
        private router: RouterExtensions,
        private route: ActivatedRoute
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.route.queryParams.subscribe(params => {
            this.course = params as Course;
        });
        this.courseCompletion();
        this.calculateGrade();
        console.log(this.currentGrade + " " + this.progressPercent);
    }

    courseCompletion() {
        this.course.weightedGrades.forEach(grade => {
            this.progressPercent += grade.weightFactor as number;
        });
    }

    calculateGrade() {
        let denom = 0;
        let num = 0;
        this.course.weightedGrades.forEach(grade => {
            num += (grade.gradeFactor * (grade.weightFactor / 100)) as number;
            denom += grade.weightFactor as number;
        });
        this.currentGrade = num / denom;
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    viewWeightDistribution() {
        this.router.navigate(["course-distribution"], {
            transition: { name: "slideTop", duration: 500, curve: "ease" }
        });
    }
}
