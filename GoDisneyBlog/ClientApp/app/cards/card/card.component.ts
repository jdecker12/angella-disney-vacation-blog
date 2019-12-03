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
        setTimeout(() => {
            var cards = document.getElementsByClassName('go-dis-card');
            var crdArr = Array.from(cards);
            crdArr[0].classList.add('scroll-animation');
        },3000);

        
        this.animateOnScroll();

    }//end onInit





    animateOnScroll(): void {
        var myWindow = document.getElementById('mat-sidenav-content');
        setTimeout(() => {
            myWindow.onscroll = () => {
                var myElems = document.getElementsByClassName('go-dis-card');
                var cardArr = Array.from(myElems);
                cardArr.forEach((element) => {
                    var myCard = element.getBoundingClientRect();
                    if (myCard.top <= 513) {
                        element.classList.add('scroll-animation');
                    }
                });//end foreach
            }//end onscroll
        }, 2000);

    }//end amimateOnScroll
}
