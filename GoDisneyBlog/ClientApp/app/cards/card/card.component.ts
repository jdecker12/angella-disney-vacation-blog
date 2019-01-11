import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import { Card } from '../../models/card';

@Component({
  selector: 'gdb-card',
    templateUrl:'card.component.html' ,
  styleUrls: ['card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private data: DataService) { }
    public cards: Card[] = [];

    ngOnInit(): void  {
        this.data.loadCards()
            .subscribe(success => {
                if (success) {
                    this.cards = this.data.cards;
                    return true;
                }
                
            })
  }

}
