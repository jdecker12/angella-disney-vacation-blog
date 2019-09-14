import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { JsonpCallbackContext } from '@angular/common/http/src/jsonp';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private route: Router, private data: DataService) { this.uncheck();}

   public hide = true;

   public errMessage = '';

   public creds = {
      username: '',
      password: ''
    }

    public checked: boolean = false;

    onLogin() {
        this.data.login(this.creds)
            .subscribe(success => {
                if (success) {
                    this.route.navigate(["select-card"]);
                    if (this.checked == true) {
                        var myLocal = JSON.stringify(this.creds);
                        var encCreds = btoa(myLocal);
                        localStorage.setItem('exp', encCreds);
                    }
                } 
            }, err => this.errMessage = "Failed to login")
    }

    ngOnInit() {
        var credentials = localStorage.getItem('exp');
        if (credentials != undefined) {
            var dec = JSON.parse(atob(credentials));
            this.creds.username = dec.username;
            this.creds.password = dec.password;
            this.checked = true;
        }
    }

    uncheck() {
        if (this.checked == true) {
            localStorage.removeItem('exp');
            this.checked != this.checked;
            this.creds.username = '';
            this.creds.password = '';
        }
    }

    cancel() {
        this.route.navigate(["/"]);
    }
  

}
