import {Component} from '@angular/core';
import {ProductGet} from '../../../model/ProductGet';
import {HttpClient} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SingoloProdottoFiglio} from '../singolo-prodotto-figlio/singolo-prodotto-figlio';

@Component({
  selector: 'app-product-list',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SingoloProdottoFiglio
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  products: ProductGet[] = [];
  categoria = "";
  valorePrezzo = 0;
  maggiore = true;

  filtra() {
    return this.products.filter
    (
      p => {
        let categoriaCorretta = p.category.toLowerCase().includes(this.categoria.toLowerCase());
        if (this.maggiore)
          return p.price >= this.valorePrezzo && categoriaCorretta;
        else
          return p.price <= this.valorePrezzo && categoriaCorretta;
      }
    );
  }

  constructor(private http: HttpClient) {

    this.refresh();
  }

  refresh() {
    this.http.get<ProductGet[]>("/api/products").subscribe(
      (resp) => this.products = resp
    )
  }

  cancelloMioFiglio(idFiglio: number) {
    // let indiceFiglio=  this.products.findIndex(p=>p.id==idFiglio);
    // //        sintassi di clonazione
    // let clone = [...this.products];
    // clone.splice(indiceFiglio,1)
    // this.products =  clone;
    this.http.delete("api/products/" + idFiglio).subscribe(
      () => {
        alert("prodotto cancellato")
        this.refresh();
      }
    );
  }
}
