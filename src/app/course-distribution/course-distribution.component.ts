import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { ModalCourseDistComponent } from './modal-course-dist/modal-course-dist.component';

@Component({
  selector: 'ns-course-distribution',
  templateUrl: './course-distribution.component.html',
  styleUrls: ['./course-distribution.component.css']
})
export class CourseDistributionComponent implements OnInit {

  constructor(private modalService: ModalDialogService, private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  addWeightedGrade() {
    let options: ModalDialogOptions = {
      viewContainerRef: this.viewContainerRef,
      fullscreen: false,
      context: {
        courseName: "PROTECH 3CE3"
      }
    };

    this.modalService.showModal(ModalCourseDistComponent, options)

  }
}
