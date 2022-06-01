import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { CarInventoryComponent } from './car-inventory/car-inventory.component';
import { FooterComponent } from './footer/footer.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { Lf30Component } from './lf30/lf30.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    CarInventoryComponent,
    FooterComponent,
    CarDetailComponent,
    Lf30Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
