import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

 
    update: string;


    @Output() toggleSidenav = new EventEmitter<void>();
    @Output() goToAdmin = new EventEmitter<void>();

    @Input() navTrue: boolean;
    constructor(private data: DataService, private router: Router) {
        this.buttonText();
    }

    onAdmin(): void {
        this.data.loginRequired ? this.router.navigate(['login']) : this.router.navigate(['select-card']);
    }

    buttonText(): void {
        this.data.loginRequired ? this.update = 'login': this.update = 'Create Content'; 
    }

    ngOnInit() {
    }

}
