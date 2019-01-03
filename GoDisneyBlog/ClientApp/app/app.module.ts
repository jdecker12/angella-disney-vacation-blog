import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './services/data.service';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { CardComponent } from './cards/card/card.component';


let routes = [
    { path: " ", component: CardComponent },
    
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MaterialModule,
      HttpClientModule,
      RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
