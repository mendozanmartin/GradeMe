import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { Course } from '~/models/course.model';
import { GradePointAverage } from '~/models/grade-point-average.model';

@Component({
  selector: 'ns-addition-sequence',
  templateUrl: './addition-sequence.component.html',
  styleUrls: ['./addition-sequence.component.css']
})
export class AdditionSequenceComponent implements OnInit {

  public course:Course;
  public grade: GradePointAverage;

  constructor(private page: Page) {
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
  }

  courseSequence() {

  }

  termSequence() {

  }
}
