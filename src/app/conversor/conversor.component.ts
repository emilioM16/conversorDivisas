import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatosDivisasService } from '../datos-divisas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  divisas$: Object;

  conversorForm = new FormGroup ({
    divisaOrigen: new FormControl(),
    divisaDestino: new FormControl()
  })

  constructor(private data: DatosDivisasService) { }

  ngOnInit() {
    this.data.getSymbols().subscribe(
      data => this.divisas$ = data['symbols']
    ); 
    console.log(this.divisas$ )
  }

}
