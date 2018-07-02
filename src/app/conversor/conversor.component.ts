import { Component, OnInit } from '@angular/core';
import { DatosDivisasService } from '../datos-divisas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  divisas$: Object;
  cotizacionDivisa$: Object;
  divisaOrigen: String;
  divisaDestino: String;


  constructor(private data: DatosDivisasService) {
    this.divisaOrigen = 'ARS';
    this.divisaDestino = 'USD';
  }

  ngOnInit() {
    this.data.getSymbols().subscribe(
      data => this.divisas$ = data['results']
    );
    this.data.getRate(this.divisaOrigen,this.divisaDestino).subscribe(
      data => this.cotizacionDivisa$ = data['results'][this.divisaOrigen+'_'+this.divisaDestino]
    );
  }

  onChangeDivisa(){
    console.log(this.divisaOrigen);
    this.data.getRate(this.divisaOrigen, this.divisaDestino).subscribe(
      data=> this.cotizacionDivisa$ = data['results'][this.divisaOrigen+'_'+this.divisaDestino]
    );
  }

  onChangeDestino(value){
    console.log(value);
  }

}
