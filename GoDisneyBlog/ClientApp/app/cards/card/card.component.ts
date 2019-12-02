import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import { Card } from '../../models/card';
import { window } from 'rxjs/operators';

@Component({
    selector: 'gdb-card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.scss']
})
export class CardComponent implements OnInit {

    public initAnimation: boolean = false;

    constructor(private data: DataService) {}
    public cards: Card[] = [];

    ngOnInit(): void {
        this.data.loadCardsByCategory('Main')
            .subscribe(success => {
                if (success) {
                    this.cards = this.data.cards;
                    return true;
                }
            });
        this.animateOnScroll();

    }//end onInit



    animateOnScroll(): void {
        var myWindow = document.getElementById('mat-sidenav-content');
        myWindow.onscroll = () => {
            var myElems = document.getElementsByClassName('go-dis-card');
            var cardArr = Array.from(myElems);
            console.log(cardArr);
            cardArr.forEach((element) => {
                var myCard = element.getBoundingClientRect();
                if (myCard.top <= 413) {
                    element.classList.add('scroll-animation');
                }
            });//end foreach
        }//end onscroll
    }//end amimateOnScroll
}
