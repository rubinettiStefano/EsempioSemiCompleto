import { Component } from '@angular/core';
import {ProductGet} from '../../../model/ProductGet';
import {HttpClient} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList
{
  products:ProductGet[]=[];
  categoria="";
  valorePrezzo = 0;
  maggiore=true;

  filtra() {
    return this.products.filter
    (
      p =>
      {
        let categoriaCorretta = p.category.toLowerCase().includes(this.categoria.toLowerCase());
        if (this.maggiore)
          return p.price >= this.valorePrezzo && categoriaCorretta;
        else
          return p.price <= this.valorePrezzo && categoriaCorretta;
      }
    );
  }

  constructor(private http:HttpClient)
  {
    this.http.get<ProductGet[]>("/api/products").subscribe(
      (resp)=>this.products=resp
    )
  }
}
