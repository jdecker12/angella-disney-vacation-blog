import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {


    @Output() toggleSidenav = new EventEmitter<void>();
    constructor() { }

    ngOnInit() {
    }

}
