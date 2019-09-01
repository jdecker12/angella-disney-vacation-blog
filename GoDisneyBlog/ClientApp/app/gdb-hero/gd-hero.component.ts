import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
    selector: 'app-gdb-hero',
    templateUrl: './gd-hero.component.html',
    styleUrls: ['./gd-hero.component.scss']
})
export class GdHeroComponent implements OnInit {

    constructor(private data: DataService) { }

    cards$: Observable<Card[]>[];

    ngOnInit() {
        this.cards$ = this.data.loadCards();
    }

    truncEight(x): string {
       return  x.slice(x.indexOf('-') + 1);
    }
}