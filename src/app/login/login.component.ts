import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { AuthService } from '~/services/auth.service';
import { PersistentSettings } from '~/services/persistent-settings.service';
import { RouterExtensions } from 'nativescript-angular/router';


@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(private page: Page, private auth: AuthService, private router: RouterExtensions) { 
    page.actionBarHidden = true;
  }

  ngOnInit() {
  }

  login() {
    this.auth.authenticate(this.email, this.password).then((data) => {
      if (data.isSuccessful) {
        PersistentSettings.token = data.uid
        this.router.navigate(["/home"])
      } 
    })
  }

  navigateSignUp() {
    this.router.navigate(["/signup"])
  }

}
