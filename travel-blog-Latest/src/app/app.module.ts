import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { PhotographyComponent } from './pages/photography/photography.component';
import { SportsComponent } from './pages/sports/sports.component';
import { TravelComponent } from './pages/travel/travel.component';
import { BusinessComponent } from './pages/business/business.component';
import { FashionComponent } from './pages/fashion/fashion.component';
import { FeaturesComponent } from './pages/features/features.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule } from '@angular/forms';
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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   ContactComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
