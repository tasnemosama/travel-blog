import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { PhotographyComponent } from './photography/photography.component';
import { SportsComponent } from './sports/sports.component';
import { TravelComponent } from './travel/travel.component';
import { BusinessComponent } from './business/business.component';
import { FashionComponent } from './fashion/fashion.component';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PhotographyComponent,
    SportsComponent,
    TravelComponent,
    BusinessComponent,
    FashionComponent,
    FeaturesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
