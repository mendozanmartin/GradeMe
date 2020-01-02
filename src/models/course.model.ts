import { AssessmentGrade } from "./assessment-grade.model";

export class Course {
    cid: string;
    courseName: string;
    currentGrade: string;
    academicYear: number;
    academicSeason: string;
    weightedGrades: Array<AssessmentGrade>
    credits: number;
}