import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Card, CardContent } from 'ClientApp/app/models/card';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { map } from 'rxjs/operators';
import { CardComponent } from 'ClientApp/app/cards/card/card.component';

@Component({
  selector: 'app-select-card',
  templateUrl: './select-card.component.html',
  styleUrls: ['./select-card.component.scss']
})
export class SelectCardComponent implements OnInit {
    cardLink: any;
    
    constructor(private data: DataService, private router: Router) { }
    public cards: Card[] = [];
    public card: Card;
    public name: any;
    public formValue: any;
    public selected: boolean = false;
    public result: any;
    public crdCntns: any;

    updateCardForm: FormGroup;
    cardContents: FormGroup;
    cardTitle: FormControl;
    cardIcon: FormControl;
    cardImg: FormControl;
    cardLinkName: FormControl;
    paraOne: FormControl;
    paraTwo: FormControl;
    paraThree: FormControl;
    paraFour: FormControl;
    cardId: FormControl;


    ngOnInit() {
     
        this.card = new Card();
        this.data.loadCards()
            .subscribe(success => {
                if (success) {
                    this.cards = this.data.cards;
                    console.log(this.cards);
                   
                }
            })

        let cardTitle = new FormControl('');
        let cardIcon = new FormControl('');
        let cardImg = new FormControl('');
        let cardLink = new FormControl('');
        let cardLinkName = new FormControl('');
        let paraOne = new FormControl('');
        let paraTwo = new FormControl('');
        let paraThree = new FormControl('');
        let paraFour = new FormControl('');
        
        this.updateCardForm = new FormGroup({
            cardTitle: cardTitle,
            cardIcon: cardIcon,
            cardImg: cardImg,
            cardLink: cardLink,
            cardLinkName: cardLinkName,
            cardContents: new FormGroup({
                paraOne: paraOne,
                paraTwo: paraTwo,
                paraThree: paraThree,
                paraFour: paraFour,
                })
           
        });
    }/////end of onInit

    getErrorMessage() {
        return this.cardTitle.hasError('required') ? 'You must enter a value' : '';
    }

    saveFormData(formValue) {
        formValue.cardContents = [formValue.cardContents];
        this.data.updateCard(this.card.cardTitle, formValue)
            .subscribe(success => {
                if (success) {
                    this.card = new Card();
                    this.router.navigate(['/']);
                    return true;
                }
            });
    }

 
    selectName(formValue) {
        this.data.getCardByName(formValue)
            .subscribe(success => {
                if (success) {
                    this.card = this.data.card;  
                    this.selected = true;
                    var shortHand = this.card.cardContents[0];

                    this.cardTitle = new FormControl(this.card.cardTitle);
                    this.cardIcon = new FormControl(this.card.cardIcon);
                    this.cardImg = new FormControl(this.card.cardImg);
                    this.cardLink = new FormControl(this.card.cardLink);
                    this.cardLinkName = new FormControl(this.card.cardLinkName);
                    this.paraOne = new FormControl(shortHand.paraOne);
                    this.paraTwo = new FormControl(shortHand.paraTwo);
                    this.paraThree = new FormControl(shortHand.paraThree);
                    this.paraFour = new FormControl(shortHand.paraFour);
                   
                    this.updateCardForm = new FormGroup({
                        cardTitle: this.cardTitle,
                        cardIcon: this.cardIcon,
                        cardImg: this.cardImg,
                        cardLink: this.cardLink,
                        cardLinkName: this.cardLinkName,
                        cardContents: new FormGroup({
                            paraOne: this.paraOne,
                            paraTwo: this.paraTwo,
                            paraThree: this.paraThree,
                            paraFour: this.paraFour,
                        })
                    });
                }
            })
        }

    cancel() {
        this.router.navigate(["/"]);
    }
       
   
   



}
