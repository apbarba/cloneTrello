import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';
import { DialogRef } from '@angular/cdk/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose,faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from "../btn/btn.component";
import { ToDo } from '../../models/todo.model';

interface Data {
  todo: ToDo;
}

interface InputData{
  todo: ToDo;
}

interface OutputData{
  rta: boolean;
}


@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [CommonModule, DialogModule, FontAwesomeModule, BtnComponent],
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent implements OnInit{

  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  todo: ToDo;

  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData
  ) {
    this.todo = data.todo;
  }


  ngOnInit(): void {
    
  }

  close(){
    this.dialogRef.close();
  }

  closeWithrta(rta: boolean){
    this.dialogRef.close({rta});
  }
}





