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
    public currentWholeGrade: number = 0;
    public currentDecimalGrade: number = 0;
    constructor(
        private router: RouterExtensions,
        private route: ActivatedRoute
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // todo: turn queryParams into state to support complex objects
        this.route.queryParams.subscribe(params => {
            this.course = JSON.parse(params.course) as Course;
        });
        this.courseCompletion();
        this.calculateGrade();
    }

    courseCompletion() {
        this.course.weightedGrades.forEach(grade => {
            this.progressPercent += grade.weightFactor as number;
        });
    }

    calculateGrade() {
        let denominator = 0;
        let numerator = 0;

        this.course.weightedGrades.forEach(grade => {
            numerator += (grade.gradeFactor *
                (grade.weightFactor / 100)) as number;
            denominator += grade.weightFactor as number;
        });
        this.currentGrade = parseInt(
            ((numerator / denominator) * 100).toFixed()
        );
        this.currentWholeGrade = Math.floor(this.currentGrade);
        this.currentDecimalGrade = parseInt(
            this.currentGrade.toString().split(".")[1]
        );
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
