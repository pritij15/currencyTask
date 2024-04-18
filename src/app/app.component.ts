import { Component, OnInit } from '@angular/core';
import { Currency } from './models/currency';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'currencyTask';

  constructor(private _currencyService : CurrencyService){}

  currArr!:Array<Currency>
  basecurrency! : string;
  targetCurrency! : string;
  amount : number = 1;
  result : number = 0;
  currencyCode! : string[];

ngOnInit(): void {
  this._currencyService.getAllCodes()
  .subscribe(res => {
    console.log(res);  
    this.currencyCode = res;
  })
}

convertCurrency(){
  this._currencyService.gteexchangerates(this.basecurrency)
  .subscribe(res => {console.log(res)
  this.result = res.conversion_rates [this.targetCurrency] * this.amount
    console.log(this.result);  
  })
}
}
