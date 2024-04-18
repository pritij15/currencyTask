import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  postkey : string = 'https://v6.exchangerate-api.com/v6';
  apikey  = 'ae7635ff739126d52e09b37b';

  constructor(private _http : HttpClient) { }

  gteexchangerates(basecurrency:string):Observable<any>{
    let posturl = `${this.postkey}/${this.apikey}/latest/${basecurrency}`;
    return this._http.get(posturl)
}
getAllCodes(){
    let posturl = `${this.postkey}/${this.apikey}/latest/AED`;
    return this._http.get(posturl)
    .pipe(
        map((res :any)=>{
            let currArr : Array<any>=[];
            for (const key in res.conversion_rates) {
                currArr.push(key)
            }
            return currArr
        })
        
    )
}


}
