import {Component, Input} from '@angular/core';
import {ProductGet} from '../../../model/ProductGet';

@Component({
  selector: 'app-singolo-prodotto-figlio',
  imports: [],
  templateUrl: './singolo-prodotto-figlio.html',
  styleUrl: './singolo-prodotto-figlio.css'
})
export class SingoloProdottoFiglio {

  // @Input() -> mi arriva dal padre
  @Input() prod:ProductGet = {id:0,name:"",imgUrl:"",price:0,category:""};
}
