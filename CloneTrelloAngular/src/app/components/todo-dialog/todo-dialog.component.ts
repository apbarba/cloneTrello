import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from '@angular/cdk/dialog';
import { DialogRef } from '@angular/cdk/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose,faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from "../btn/btn.component";


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

  constructor(private dialogRef: DialogRef) { }

  ngOnInit(): void {
    
  }

  close(){
    this.dialogRef.close();
  }
}





