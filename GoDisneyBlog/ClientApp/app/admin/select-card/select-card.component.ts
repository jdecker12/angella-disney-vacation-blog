import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Card } from 'ClientApp/app/models/card';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { map } from 'rxjs/operators';

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

    

    updateCardForm: FormGroup;

    cardTitle: FormControl;
    cardIcon: FormControl;
    cardImg: FormControl;
    cardLinkName: FormControl;
    //paraOne: FormControl;
    //paraTwo: FormControl;
    //paraThree: FormControl;
    //paraFour: FormControl;


    ngOnInit() {
     
        this.card = new Card();
        this.data.loadCards()
            .subscribe(success => {
                if (success) {
                    this.cards = this.data.cards;
                }
            })

        let cardTitle = new FormControl('', [Validators.required]);
        let cardIcon = new FormControl('');
        let cardImg = new FormControl('');
        let cardLink = new FormControl('');
        let cardLinkName = new FormControl('');
        //let paraOne = new FormControl('');
        //let paraTwo = new FormControl('');
        //let paraThree = new FormControl('');
        //let paraFour = new FormControl('');
        
        this.updateCardForm = new FormGroup({
            cardTitle: cardTitle,
            cardIcon: cardIcon,
            cardImg: cardImg,
            cardLink: cardLink,
            cardLinkName: cardLinkName,
            
            //paraOne: paraOne,
            //paraTwo: paraTwo,
            //paraThree: paraThree,
            //paraFour: paraFour

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
                    this.selected = true;

                    this.cardTitle = new FormControl(this.card.cardTitle);
                    this.cardIcon = new FormControl(this.card.cardIcon);
                    this.cardImg = new FormControl(this.card.cardImg);
                    this.cardLink = new FormControl(this.card.cardLink);
                    this.cardLinkName = new FormControl(this.card.cardLinkName);
                    //this.paraOne = new FormControl('');
                    //this.paraOne = new FormControl('');
                    //this.paraOne = new FormControl('');
                    //this.paraOne = new FormControl('');

                    this.updateCardForm = new FormGroup({
                        cardTitle: this.cardTitle,
                        cardIcon: this.cardIcon,
                        cardImg: this.cardImg,
                        cardLink: this.cardLink,
                        cardLinkName: this.cardLinkName,
                        //paraOne: this.paraOne,
                        //paraTwo: this.paraTwo,
                        //paraThree: this.paraThree,
                        //paraFour: this.paraFour
                    });
                }
            })
        }

    cancel() {
        this.router.navigate(["/"]);
    }
       
   
   



}
