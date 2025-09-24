import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ProductList} from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App
{
  constructor(private http:HttpClient) {
  }
}
