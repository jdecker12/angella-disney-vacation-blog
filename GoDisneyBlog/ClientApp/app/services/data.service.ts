import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Card } from '../models/card';

@Injectable()
export class DataService {
    id: any;

    private token: string = "";
    private tokenExpiration: Date;
    
    constructor(private http: HttpClient) { }

    public card: Card = new Card();

    public cards: Card[] = [];

    public  httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + this.token
        })
    };

    loadCards(): Observable<boolean> {
        return this.http.get("/api/cards")
            .pipe(
            map((data:any[]) => {
                this.cards = data;
                return true;
            }));
    }

    getCardById(id: number) {
        return this.cards.find(x => x.thisCardId == id);
    }

    getMyCardById(id: number): Observable<boolean> {
        return this.http.get("/api/cards/" + id)
            .pipe(
            map((data: any) => {
                this.card = data;
                return true;
            }));
    }

    public get loginRequired(): boolean {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }

    public login(creds): Observable<boolean> {
        return this.http.post("/auth/createToken", creds)
            .pipe(
                map((data: any) => {
                this.token = data.token;
                this.tokenExpiration = data.expiration;
                return true;
            }));
    }

    public updateCard(id:number): Observable<boolean> {
        return this.http.put("/api/cards/"+ id, this.card, {
            headers: new HttpHeaders().set("Authorization", "Bearer" + this.token)
        }).pipe(
                map((data: any) => {
                this.card = new Card();
                return true;
                }));
    }

    public admin(): Observable<boolean> {
        return this.http.post("/api/cards", this.card, {
            headers: new HttpHeaders().set("Authorization", "Bearer" + this.token)
        })
         .pipe(
            map((data: any) => {
                this.card = new Card();
                return true;
            }))
    }
    

    
    

}
