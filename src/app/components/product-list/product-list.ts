import { Component } from '@angular/core';
import {ProductGet} from '../../../model/ProductGet';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList
{
  products:ProductGet[]=[];

  constructor(private http:HttpClient)
  {
    this.http.get<ProductGet[]>("/api/products").subscribe(
      (resp)=>this.products=resp
    )
  }
}
