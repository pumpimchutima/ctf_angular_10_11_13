import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { HomeWork3Component } from './homework3.component'
import { NavbarHomeWork3Component} from './navbar/navbar.component';
import { HomeHomeWork3Component } from './home/home.component';
import { SearchbarHomeWork3Component } from './searchbar/searchbar.component';
import { from } from 'rxjs';




@NgModule({
  declarations: [
    HomeWork3Component,
    NavbarHomeWork3Component,
    HomeHomeWork3Component,
    SearchbarHomeWork3Component
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [HomeWork3Component]
})
export class HomeWork3Module { }
