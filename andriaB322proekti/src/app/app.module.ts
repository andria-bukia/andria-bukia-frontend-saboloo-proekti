import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MiddleComponent } from './components/middle/middle.component';
import { Middle2Component } from './components/middle2/middle2.component';
import { ProductsComponent } from './components/product/products.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductiComponent } from './components/producti/producti.component';
import { BasketComponent } from './components/basket/basket.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiddleComponent,
    Middle2Component,
    ProductsComponent,
    HomePageComponent,
    CartComponent,
    FooterComponent,
    ProductiComponent,
    BasketComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
