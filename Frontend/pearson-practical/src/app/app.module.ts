import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './countries/country/country.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from "./material/material.module";
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http"

import { CountryService } from "./shared/country.service";
import { CountryListComponent } from './countries/country-list/country-list.component';
import { InfoComponentComponent } from './info-component/info-component.component';


@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryComponent,
    CountryListComponent,
    InfoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CountryService
  ],
  bootstrap: [AppComponent],
  entryComponents: [CountryComponent]
})
export class AppModule { }
