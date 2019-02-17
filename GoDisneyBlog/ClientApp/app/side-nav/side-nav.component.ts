import { Component, NgZone } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
    private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px`);

    constructor(zone: NgZone, private data: DataService, private router: Router) {
        this.mediaMatcher.addListener(mql => 
            zone.run(() => this.mediaMatcher = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)));
    }
    events: string[] = [];
    opened: boolean;

    isScreenSmall(): boolean {
        return this.mediaMatcher.matches;
    }

    onAdmin(): void {
        if (this.data.loginRequired) {
            this.router.navigate(["login"])
        } else {
            this.router.navigate(["select-card"]);
        }
    }
}