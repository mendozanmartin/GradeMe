export class AssessmentGrade {
    weightFactor: number;
    gradeFactor: number;
    gradeName: string;
    weightedGrade: number;

    getWeightedGradeCalc() {
        return this.weightFactor*this.gradeFactor
    }
}