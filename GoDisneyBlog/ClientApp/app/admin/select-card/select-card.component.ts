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
   // public cardContents: CardContent[] = [];
    public card: Card;
    public cardContent: CardContent;
    public name: any;
    public formValue: any;
    public selected: boolean = false;
    public result: any;

    

    updateCardForm: FormGroup;
    cardContents: FormArray;
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
        //this.cardContents
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
       // let cardId = new FormControl('');
        
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
               // cardId: cardId
                })
           
        });



    }/////end of onInit

    getErrorMessage() {
        return this.cardTitle.hasError('required') ? 'You must enter a value' : '';
    }

    saveFormData(formValue) {
        this.data.updateCard(this.card.cardTitle, formValue)
            .subscribe(success => {
                if (success) {
                    this.card = new Card();

                   /// this.cardContent = new CardContent();
                    console.log(this.card);
                 
                    this.router.navigate(['/']);
                    return true;
                }
            });
        
        console.log(formValue);
    }

 
    selectName(formValue) {
        this.data.getCardByName(formValue)
            .subscribe(success => {
                if (success) {
                    this.card = this.data.card;
                    //this.cardContents = this.data.card.cardContents[0];
                    console.log(this.card);

                    let cardContents = [];
                  
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
                    ///this.cardId = new FormControl(this.card.thisCardId); 
                   

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
                           // cardId: this.cardId
                        })
                    });

                    //this.updateCardContent = new FormGroup({
                    //    paraOne: this.paras['paraOne'],
                    //    paraTwo: this.card.cardContents['paraTwo'],
                    //    paraThree: this.card.cardContents['paraThree'],
                    //    paraFour: this.card.cardContents['paraFour']
                    //})
                }
            })
        }

    cancel() {
        this.router.navigate(["/"]);
    }
       
   
   



}
