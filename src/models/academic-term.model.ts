import { Course } from "./course.model";

export class AcademicTerm {
    currentGrade: number;
    credits: number;
    courses: Array<Course>
    academicYear: number;
    academicSeason: string;
}