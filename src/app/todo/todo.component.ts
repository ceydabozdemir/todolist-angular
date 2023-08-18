import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor() { }

  private name: string = "Ceyda";
  
  // items = [
  //   "item 1", "item 2", "item 3", "item 4"
  // ];

items: TodoItem[] = [ 
  // model tanımlaması yapıldığı için tip güvenliği sağlandı.
  // { id: 1, description: "su iç", action: "yes"},
  // { id: 2, description: "kahvaltı", action: "yes"},
  // { id: 3, description: "spor", action: "no"},
  // new TodoItem("su iç", "yes"),
  // new TodoItem("kahvaltı", "yes"),
  // new TodoItem("spor", "no"),
  // new TodoItem("ders", "no")
  //constractor aracılığı ile nesne oluşturduk.


  { description: "su iç", action: "yes"},
  { description: "kahvaltı", action: "yes"},
  { description: "spor", action: "no"},
];

  getName() {
    return this.name;
  }

}

