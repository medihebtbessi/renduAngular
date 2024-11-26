import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { ResidencesComponent } from './residences/residences.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ResidencesComponent,
    NavbarComponent,
    WishListComponent,
    HomeComponent,
    NotFoundComponent,
    ResidenceDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
