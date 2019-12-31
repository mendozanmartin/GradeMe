import { Component } from '@angular/core';
import { Page, EventData } from 'tns-core-modules/ui/page/page';
import { Course } from '~/models/course.model';
import { GradePointAverage } from '~/models/grade-point-average.model';
import { AcademicTerm } from '~/models/academic-term.model';
import { ListPicker } from "tns-core-modules/ui/list-picker";


@Component({
  selector: 'ns-addition-sequence',
  templateUrl: './addition-sequence.component.html',
  styleUrls: ['./addition-sequence.component.css']
})
export class AdditionSequenceComponent {

  public course: Course;
  public grade: GradePointAverage;
  public term: AcademicTerm;

  public prompt: string;
  public sequenceOne: boolean = true;
  public sequenceTwo: boolean = false;
  public sequenceThree: boolean = false;

  public years: Array<number> = [1980, 1990, 2000, 2010, 2020];


  constructor(private page: Page) {
    this.course = new Course(); //these have to be created so that there is no error when binding to ngModel
    this.term = new AcademicTerm();

    this.page.actionBarHidden = true;
    this.prompt = "Would you like to add a term or a course?";
  }

  public onSelectedIndexChanged(args: EventData) {
    const picker = <ListPicker>args.object;
    console.log(`index: ${picker.selectedIndex}; item" ${this.years[picker.selectedIndex]}`);
  }

  courseSequence() {
    this.sequenceOne = false;
    this.sequenceTwo = true;
    this.prompt = "What is the name of your course?";
  }

  termSequence() {
    this.sequenceOne = false;
    this.sequenceThree = true;
    this.prompt = "What is the academic term of this course?";
  }

  enterTermSelection() {
    this.sequenceTwo = false;
    this.sequenceThree = true;
    this.prompt = "What is the academic term of this course?";
  }
}
