import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Card, CardContent } from '../models/card';

@Injectable()
export class DataService {
    id: any;
    
    constructor(private http: HttpClient) { }

    public cards: Card[] = [];

    loadCards(): Observable<boolean> {
        return this.http.get("/api/cards")
            .pipe(
            map((data: any[]) => {
                this.cards = data;
                return true;
            }));
    }

    getCardById(id: number) {
        return this.cards.find(x => x.id == id);
            };
    

    
    

}
