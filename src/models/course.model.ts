import { AssessmentGrade } from "./assessment-grade.model";

export class Course {
    cid: string;
    courseName: string;
    currentGrade: number;
    finalGrade: number;
    academicYear: number;
    academicSeason: string;
    weightedGrades: Array<AssessmentGrade>;
    credits: number;
    inProgress: boolean;
}
