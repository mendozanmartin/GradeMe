import { CourseGrade } from "./course-grade.model";

export class Course {
    cid: string;
    courseName: string;
    currentGrade: string;
    academicYear: string;
    academicSeason: string;
    weightedGrades: Array<CourseGrade>
}