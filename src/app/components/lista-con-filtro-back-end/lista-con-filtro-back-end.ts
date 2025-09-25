import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductGet} from '../../../model/ProductGet';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-lista-con-filtro-back-end',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './lista-con-filtro-back-end.html',
  styleUrl: './lista-con-filtro-back-end.css'
})
export class ListaConFiltroBackEnd
{

  products:ProductGet[]=[];
  categoria="";
  valorePrezzo = 0;
  maggiore=true;


  constructor(private http:HttpClient)
  {
    this.riempiConTutti();
  }

  ottieniProdottiFiltrati()
  {

    let queryParams = new HttpParams();
    queryParams = queryParams
                  .append("cat",this.categoria)
                  .append("v",this.valorePrezzo)
                  .append("sgn",this.maggiore);

    return this.http.get<ProductGet[]>("/api/products",{params:queryParams})
      .subscribe
      (
        (resp)=>this.products=resp
      );
  }

  riempiConTutti()
  {
    this.http.get<ProductGet[]>("/api/products").subscribe(
      (resp)=>this.products=resp
    );
  }
}
