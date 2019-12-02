import { Component, NgZone, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { visitSiblingRenderNodes } from '@angular/core/src/view/util';
import { Card } from '../models/card';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

    navActive: boolean;
    cardData: Card[];

    private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px`);

    constructor(zone: NgZone, private data: DataService, private router: Router) {
        this.mediaMatcher.addListener(mql => 
            zone.run(() => this.mediaMatcher = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)));
    }

    ngOnInit() {
        this.data.loadCards()
            .subscribe(success => {
                if (success) {
                    this.cardData = this.data.cards;
                    return true;
                }
                return false;          
            });
}
    events: string[] = [];
    opened: boolean;
    navTrue: boolean;

    isScreenSmall(): boolean {
        this.navTrue = false;
        return this.mediaMatcher.matches;
    }

    onAdmin(): void {
        this.data.loginRequired ? this.router.navigate(['login']) : this.router.navigate(['select-card']);
    }
}