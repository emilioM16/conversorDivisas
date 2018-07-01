import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosDivisasService {

  constructor(private http: HttpClient) { }

  getSymbols(){
    return this.http.get('http://data.fixer.io/api/symbols?access_key=b8b0eb6fba90baf3118de6d7faadf781');
  }

}
