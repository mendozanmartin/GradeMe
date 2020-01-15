import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/common';

@Component({
  selector: 'ns-modal-course-dist',
  templateUrl: './modal-course-dist.component.html',
  styleUrls: ['./modal-course-dist.component.css']
})
export class ModalCourseDistComponent implements OnInit {
  public courseName: string;
  constructor(private params: ModalDialogParams) {
    this.courseName = this.params.context.courseName
  }

  ngOnInit() {
  }

  close() {
    this.params.closeCallback(undefined)
  }
}
