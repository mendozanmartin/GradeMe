import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { User } from '~/models/user.model';
import { AuthService } from '~/services/auth.service';


@Component({
  selector: 'ns-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user: User;
  public password: string;

  constructor(private page: Page, private auth: AuthService) { 
    page.actionBarHidden = true;
    this.user = new User();
  }

  ngOnInit() {
    
  }

  signUp() {
    this.auth.createUser(this.user, this.password);
  }

}
