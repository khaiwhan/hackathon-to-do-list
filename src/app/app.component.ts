import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodoListItem } from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports:[CommonModule]
})
export class AppComponent {
  title = 'hackathon-to-do-list';
  dataToday :Date = new Date();
  listTodo:TodoListItem[] = [];
  currentIndex : number = 0;
  enterData(e:any){
    if(e.target.value && e.target.value.length > 0)
    {
      var todoData = new TodoListItem();
      todoData.id = this.currentIndex++;
      todoData.content = e.target.value;
      this.listTodo.push(todoData);
      var data= document.getElementById('todoInput') as HTMLInputElement;
      data.value = '';
    }
  } 
  delete(id?:number){
    this.listTodo =  this.listTodo.filter(x=>x.id != id);
    console.log(this.listTodo);
  }
  disableTodoList(id?:number, isStyleLine:boolean = false){
      this.listTodo.find(x=>x.id == id)!.isLineDash = !isStyleLine;
  }

}
