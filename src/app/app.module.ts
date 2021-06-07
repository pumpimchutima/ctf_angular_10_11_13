import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CountingComponent } from './counting/counting.component';
import { Lab4Component } from './lab4/lab4.component';
import { NavbarComponent } from './homework1/navbar/navbar.component';
import { SearchbarComponent} from './homework1/searchbar/searchbar.component';
import { TopBannerComponent } from './homework1/topbanner/topbanner.component';
import { CategoryMenuComponent } from './homework1/categorymenu/categorymenu.component';
import { ToDoListComponent } from './todolist/todolist.component';
import { HomeWork3Component } from './homework3/homework3.component';
import { HomeWork1Component } from './homework1/homework1.component';



const routes: Routes = [
  { path: 'homework3', component: HomeWork3Component},
  { path: 'lab3', component: CountingComponent},
  { path: 'lab4', component: Lab4Component},
  { path: 'homework1', component: HomeWork1Component},
  { path: 'todolist', component: ToDoListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountingComponent,
    Lab4Component,
    ToDoListComponent
        
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes,{ enableTracing: false })
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
