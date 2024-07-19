import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit{

@Input() typeBtn: 'button' | 'reset' | 'submit'= 'button';
@Input() color = 'primary';
  constructor() { }

  ngOnInit(): void {
    
  }

  get colors(){
    return {
      'bg-succes-700': true
    };
  }

}
