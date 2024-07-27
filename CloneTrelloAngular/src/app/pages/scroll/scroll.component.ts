import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { Products } from '../../models/product.model';

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [NavbarComponent, CommonModule, HttpClientModule, ScrollingModule],
  templateUrl: './scroll.component.html'
})
export class ScrollComponent implements OnInit{

  products: Products[] = [];

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http.get<Products[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      this.products = data;
    })
  }

}
