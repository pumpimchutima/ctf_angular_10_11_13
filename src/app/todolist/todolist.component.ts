import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class ToDoListComponent {

  @Input()
  task : string = '';
  items = ['Coffee','Breakfast'];

  add(){
    this.items.push(this.task);
  }

  remove(i: number){
    this.items.splice(i,1);
  }
 
}
