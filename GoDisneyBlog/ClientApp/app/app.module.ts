import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DataService } from './services/data.service';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { CardComponent } from './cards/card/card.component';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { GdHeroComponent } from './gd-hero/gd-hero.component';
import { GdbMenuComponent } from './gdb-menu/gdb-menu.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SidenavToolbarComponent } from './sidenav-toolbar/sidenav-toolbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
        
    { path: 'main', component: MainContentComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
        
    {path:'**', redirectTo: ''}
]

@NgModule({
  declarations: [
    AppComponent,
      CardComponent,
      ToolbarComponent,
      SideBarComponent,
      FooterComponent,
      GdHeroComponent,
      GdbMenuComponent,
      SideNavComponent,
      MainContentComponent,
      SidenavToolbarComponent,
      AboutComponent,
      ContactComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MaterialModule,
      FlexLayoutModule,
      HttpClientModule,
      RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }