import { Component, OnInit } from '@angular/core';
import { Page, EventData } from 'tns-core-modules/ui/page/page';
import { Course } from '~/models/course.model';
import { GradePointAverage } from '~/models/grade-point-average.model';
import { AcademicTerm } from '~/models/academic-term.model';
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { RouterExtensions } from 'nativescript-angular/router';


@Component({
  selector: 'ns-addition-sequence',
  templateUrl: './addition-sequence.component.html',
  styleUrls: ['./addition-sequence.component.css']
})
export class AdditionSequenceComponent implements OnInit{

  public course: Course;
  public grade: GradePointAverage;
  public term: AcademicTerm;

  public prompt: string = "Would you like to add a course or a completed term?";
  private coursePrompts: Array<string>;
  private termPrompts: Array<string>;

  public sequenceBegin: boolean = true;
  public courseOne: boolean = false;
  public courseTwo: boolean = false;
  public courseThree: boolean = false;

  public years: Array<number> = [];
  public seasons: Array<string> = ['Spring/Summer', 'Fall', 'Winter']


  constructor(private page: Page, private router: RouterExtensions) {
    this.course = new Course(); //these have to be created so that there is no error when binding to ngModel
    this.term = new AcademicTerm();

    this.page.actionBarHidden = true;
    this.coursePrompts = ["What is the name of your course?", "What is the academic term of this course?", "Is this course completed?", "What was your final GPA for this course?"]
    this.termPrompts = ["What is the academic term of your term?", "What is your final GPA for this term?"]
  }

  ngOnInit() {
    const today = new Date();
    const currentYear = today.getFullYear();

    for (let i = currentYear + 1; i > currentYear - 20; i--) {
      this.years.push(i)
    }
  }
  courseSequence() { //1st step in course sequence
    this.sequenceBegin = false;
    this.courseOne = true;
    this.prompt = this.coursePrompts[0];
  }

  termSequence() { //1st step in terms sequence
    this.sequenceBegin = false;
    this.courseTwo = true;
    this.prompt = this.termPrompts[0];
  }

  enterTermSelection() { //2nd step in course sequence
    this.courseOne = false;
    this.courseTwo = true;
    this.prompt = this.coursePrompts[1];

  }

  submitAcademicTerm() { //3rd step in course sequence
    this.courseTwo = false;
    this.courseThree = true;
    this.prompt = this.coursePrompts[2]
  }

  enterFinalGrade() {

  }

  enterGradeBreakdown() {
    //TODO: navigate to grade breakdown component
 //   this.router.navigate(["/"]) 
  }

  public onSelectedYearChanged(args: EventData) {
    const picker = <ListPicker>args.object;
    if (this.courseTwo) {
      this.course.academicYear = this.years[picker.selectedIndex]
    } else {
      this.term.academicYear = this.years[picker.selectedIndex]
    }
  }

  public onSelectedSeasonChanged(args: EventData) {
    const picker = <ListPicker>args.object;
    if (this.courseTwo) {
      this.course.academicSeason = this.seasons[picker.selectedIndex]
    } else {
      this.term.academicSeason = this.seasons[picker.selectedIndex]
    }
  }

}
