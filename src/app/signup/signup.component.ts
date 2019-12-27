import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { FirebaseService } from '~/services/firebase.service';


@Component({
  selector: 'ns-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private page: Page, private firebase: FirebaseService) { 
    page.actionBarHidden = true;
  }

  ngOnInit() {
    
  }

}
