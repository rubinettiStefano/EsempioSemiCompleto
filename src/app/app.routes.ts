import { Routes } from '@angular/router';
import {Homepage} from './components/homepage/homepage';
import {ProductList} from './components/product-list/product-list';
import {GiocoArray} from './components/gioco-array/gioco-array';

export const routes: Routes =
  [
    //base_url=localhost:4200/uri
    //path=uri
    {path:"",component:Homepage},
    {path:"prodotti",component:ProductList},
    {path:"array",component:GiocoArray}
  ];
