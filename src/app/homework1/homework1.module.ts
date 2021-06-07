import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { HomeWork1Component } from './homework1.component'
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent} from './searchbar/searchbar.component';
import { TopBannerComponent } from './topbanner/topbanner.component';
import { CategoryMenuComponent } from './categorymenu/categorymenu.component';



@NgModule({
  declarations: [
    HomeWork1Component,
    NavbarComponent,
    SearchbarComponent,
    TopBannerComponent,
    CategoryMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [HomeWork1Component]
})
export class HomeWork1Module { }
