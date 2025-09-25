import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ProductList} from './components/product-list/product-list';
import {Navbar} from './components/navbar/navbar';
import {Footer} from './components/footer/footer';
import {GiocoArray} from './components/gioco-array/gioco-array';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList, Navbar, Footer, GiocoArray],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App
{
  constructor(private http:HttpClient) {
  }
}
