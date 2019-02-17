import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private route:Router, private data: DataService) { }

    hide = true;
    errMessage = "";
    public creds = {
        username: "",
        password: ""
    }

    cancel() {
        this.route.navigate(["/"]);
    }

    onLogin() {
        this.data.login(this.creds)
            .subscribe(success => {
                if (success) {
                    this.route.navigate(["select-card"]);
                } 
            }, err => this.errMessage = "Failed to login")
    }

  ngOnInit() {
  }

}
