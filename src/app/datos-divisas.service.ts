import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosDivisasService {

  constructor(private http: HttpClient) { }

  getSymbols(){
    return this.http.get('https://free.currencyconverterapi.com/api/v5/currencies');
  }

  getRate(base, final){
    return this.http.get('https://free.currencyconverterapi.com/api/v5/convert?q='+ base +'_'+ final)
  }

}
