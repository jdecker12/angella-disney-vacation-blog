import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    constructor(private data: DataService) { }

    card$: Observable<Card[]>[];

    copyDate: number = new Date().getFullYear();




    sayHello(): void {
        alert('Hello');
    }

    ngOnInit() {
      this.card$ = this.data.loadCardsByCategory('Main');
  }

}
