import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { PhotographyComponent } from './pages/photography/photography.component';
import { SportsComponent } from './pages/sports/sports.component';
import { BusinessComponent } from './pages/business/business.component';
import { FashionComponent } from './pages/fashion/fashion.component';
import { FeaturesComponent } from './pages/features/features.component';
import { FormsModule } from '@angular/forms';

// ✅ استيراد TravelComponent في `imports` بدلاً من `declarations`
import { TravelComponent } from './pages/travel/travel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PhotographyComponent,
    SportsComponent,
    BusinessComponent,
    FashionComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    TravelComponent // ✅ يجب أن يكون هنا وليس في `declarations`
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
