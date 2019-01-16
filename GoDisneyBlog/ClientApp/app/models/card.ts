export class Card {
    id: number;
    category: string;
    cardTitle: string;
    cardImg: string;
    cardLink: string;
    cardLinkName: string;
    cardIcon: string;
    cardContents: Array<CardContent> = new Array<CardContent>();
    
}

export class CardContent {
    id: number;
    category: string;
    paraOne: string;
    paraTwo: string;
    paraThree: string;
    paraFour: string;
}