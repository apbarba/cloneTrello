import { Component, OnInit, input } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Products } from '../../models/product.model';
import {CdkTableModule} from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { DataSourceProduct } from './data-source';
import { BtnComponent } from "../../components/btn/btn.component";
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { __values } from 'tslib';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NavbarComponent, HttpClientModule, CdkTableModule, CommonModule, BtnComponent, ReactiveFormsModule],
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit{

  dataSource = new DataSourceProduct();
  columns: string[] = ['#No', 'name', 'price', 'cover', 'actions' ]
  total = 0;
  input = new FormControl('', { nonNullable: true});

  constructor(private http: HttpClient){ }

  ngOnInit(): void {
    this.http.get<Products[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      this.dataSource.init(data);
      this.total = this.dataSource.getTotal();
      
    })

    this.input.valueChanges
    .pipe(
      debounceTime(300)
    )
    .subscribe(value => {
      this.dataSource.find(value);
    })
  }

  update(product: Products) {
    this.dataSource.update(product.id, { price: 20})
  }
}
