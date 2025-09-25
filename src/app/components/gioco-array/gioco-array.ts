import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-gioco-array',
  imports: [
    FormsModule
  ],
  templateUrl: './gioco-array.html',
  styleUrl: './gioco-array.css'
})
export class GiocoArray
{
  arr:number[] = [6,18,11,19,8];
  min = 10;

  maggiore=true;

  filtra()
  {
    return this.arr.filter
    (
      n=>
      {
        if(this.maggiore)
          return n>this.min
        else
          return n<this.min
      }
    );
  }

  mappa()
  {
    return this.arr.map(n=> "paperino"+n);
  }

  ordinati()
  {
    return this.arr.sort((a,b)=>a-b).reverse();
  }
}
