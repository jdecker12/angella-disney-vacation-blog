import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup,  Validators } from '@angular/forms';

import { DataService } from '../services/data.service';
import { Card, CardContent } from '../models/card';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    public cards: Card[] = [];

    public card: Card; 

    constructor(private data: DataService, private route:Router, private actRoute: ActivatedRoute) { }

    ngOnInit() {

        this.data.loadCards()
            .subscribe(success => {
                if (success) {
                    this.cards = this.data.cards;
                } else {
                    console.log('Something went wrong');
                    return false;
                }
            })
    }

    
    thisCardId = new FormControl('', [Validators.required]);
    cardTitle = new FormControl('', [Validators.required]);
    cardImg = new FormControl('', [Validators.required]);
    cardIcon = new FormControl('', [Validators.required]);
    cardLink = new FormControl('', [Validators.required]);
    cardLinkName = new FormControl('', [Validators.required]);
    paraOne = new FormControl('', [Validators.required]);
    paraTwo = new FormControl('');
    paraThree = new FormControl('');
    paraFour = new FormControl('');
   

    getErrorMessage() {
        return this.thisCardId.hasError('required') ? 'You must enter a value' : '';
    }

    getErrorMessage2() {
        return this.cardTitle.hasError('required') ? 'You must enter a value' :'';
    }


    setCardId(formValue) {
        this.data.getMyCardById(formValue)
            .subscribe(success => {

                if (success) {
                    this.card = this.data.card;
                    this.cardTitle = new FormControl(this.card.cardTitle, [Validators.required]);
                    this.cardImg = new FormControl(this.card.cardImg, [Validators.required]);
                    this.cardIcon = new FormControl(this.card.cardIcon, [Validators.required]);
                    this.cardLink = new FormControl(this.card.cardLink, [Validators.required]);
                    this.cardLinkName = new FormControl(this.card.cardLinkName, [Validators.required]);
                    this.paraOne = new FormControl(this.card.cardContents.map(p => p.paraOne), [Validators.required]);
                    this.paraTwo = new FormControl(this.card.cardContents.map(p => p.paraTwo), [Validators.required]);
                    this.paraThree = new FormControl(this.card.cardContents.map(p => p.paraThree), [Validators.required]);
                    this.paraFour = new FormControl(this.card.cardContents.map(p => p.paraFour), [Validators.required]);

                    return true;
                } else {
                    console.log('Something went wrong');
                    return false;
                }
                   
            })
        console.log(formValue);
    }


    submitCard(formValue) {
        this.data.updateCard(formValue)
            .subscribe(success => {
                if (success) {
                    this.card = new Card();
                } else {
                    console.log('You didn\'t do something right but head');
                }
            })
    }


  


    cancel() {
        this.route.navigate(['/']);
    }

}
