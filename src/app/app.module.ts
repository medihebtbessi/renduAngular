import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { FormsModule, NgModel } from '@angular/forms';
import { FilterByAddressPipe } from './pipes/FilterByAdd';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponentComponent,
    FilterByAddressPipe
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
