import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Card} from 'ClientApp/app/models/card';
import { FormControl, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';


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
    public isChecked: string;

    updateCardForm: FormGroup;
    cardContents: FormGroup;
    radioGroup: FormControl;
    new: FormControl;
    update: FormControl;
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
                   
                }
            })
        let radioGroup = new FormControl('new');
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
            radioGroup: radioGroup,
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

    clearForm() {
        this.updateCardForm.reset();
        this.card.cardImg = '';
        this.card.cardIcon = '';
    }

    getErrorMessage() {
        return this.cardTitle.hasError('required') ? 'You must enter a value' : '';
    }

    updateFormData(formValue) {
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

    saveFormData(formValue) {
        formValue.cardContents = [formValue.cardContents];
        this.data.admin(formValue)
            .subscribe(success => {
                if (success) {
                    this.card = new Card();
                    this.router.navigate(['/']);
                    return true;
                }


                
            });

    }

    getRadioVal() {
        this.isChecked = this.updateCardForm.get('radioGroup').value
    }

    deleteSelectCard() {
        var name = this.updateCardForm.get('cardTitle').value;
        this.data.deleteCard(name)
            .subscribe(success => {
                if (success) {
                    return true;
                }
               
            });
        this.router.navigate(['/']);
    }
 
    selectName(formValue) {
        this.data.getCardByName(formValue)
            .subscribe(success => {
                if (success) {
                    this.card = this.data.card;  
                    this.selected = true;
                    var shortHand = this.card.cardContents[0];
                    
                    (this.isChecked == 'update') ? this.radioGroup = new FormControl('update'): this.radioGroup = new FormControl('delete');
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
                        radioGroup: this.radioGroup,
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
        this.router.navigate(["/card"]);
    }
       
   
   



}
