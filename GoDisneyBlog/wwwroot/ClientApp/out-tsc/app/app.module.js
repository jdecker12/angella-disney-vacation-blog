var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { CardComponent } from './cards/card/card.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { GdHeroComponent } from './gdb-hero/gd-hero.component';
import { GdbMenuComponent } from './gdb-menu/gdb-menu.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SidenavToolbarComponent } from './sidenav-toolbar/sidenav-toolbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FullCardComponent } from './cards/full-card/full-card.component';
import { LoginComponent } from './login/login.component';
import { SelectCardComponent } from './admin/select-card/select-card.component';
import { GaugestestComponent } from './gaugestest/gaugestest.component';
var routes = [
    { path: 'main', component: MainContentComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'select-card', component: SelectCardComponent },
    { path: ':id', component: FullCardComponent },
    { path: '**', redirectTo: 'main' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                ContactComponent,
                FullCardComponent,
                LoginComponent,
                SelectCardComponent,
                GaugestestComponent
            ],
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                MaterialModule,
                FlexLayoutModule,
                HttpClientModule,
                FormsModule,
                ReactiveFormsModule,
                RouterModule.forRoot(routes, { useHash: true })
            ],
            providers: [DataService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map