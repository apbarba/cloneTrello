import { Component, OnInit, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Column, ToDo } from '../../models/todo.model';
import {DialogModule} from '@angular/cdk/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, DragDropModule, NavbarComponent, TodoDialogComponent, DialogModule],
  styles: [
        `/* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }`
        ],
  templateUrl: './board.component.html',
})
export class BoardComponent implements OnInit{


  columns : Column[] = [
    {
      title: 'ToDo',
      todos: [
        {
          id: '1',
          title: 'Make dishes'
        },
        {
          id: '2',
          title: 'Buy a unicorn'
        },
      ],
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '3',
          title: 'Watch Angular Path in Platzi'
        },
      ]
    },
    {
      title: 'Done',
      todos: [
        {
          id: '4',
          title: 'Eat a orange'
        },
      ]
    }
  ]
  todo: ToDo[] = [];
  doing: ToDo[] = []
  done: ToDo[] = []

  constructor(private dialog: Dialog) {}

  ngOnInit(): void {
    
  }

  //Este metodo lo que realiza es que cuando en la lista movemos con el cdkDrag, la tarea que tenemos se coloque correctamente, es decir, que si lo muevo en la posicion 3 al 2 se quede ahí
  drop(event: CdkDragDrop<ToDo[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);  
    } else {
      transferArrayItem(
        event.previousContainer.data, 
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
  }

  addColumn(){
    this.columns.push({
      title: 'New Column',
      todos: []
    })
  }

  openDialog(todo: ToDo) {
  const dialogRef =  this.dialog.open(TodoDialogComponent, {
      data: { todo: todo },
      minWidth: '300px',
      maxHeight: '50%'
    });
    dialogRef.closed.subscribe(output => {
      console.log(output);
    })
  }
}
