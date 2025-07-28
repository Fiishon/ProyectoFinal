import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-barra-titulo',
  imports: [],
  templateUrl: './barra-titulo.html',
  styleUrl: './barra-titulo.css'
})
export class BarraTitulo {
  @Output() promocionesClicked = new EventEmitter<void>();
  @Output() principalClicked = new EventEmitter<void>();
  emitirPromociones() {
    this.promocionesClicked.emit();
  }
  AMCprincipal() {
    this.principalClicked.emit();
  }

}
