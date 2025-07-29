import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra1',
  imports: [],
  templateUrl: './barra1.html',
  styleUrl: './barra1.css'
})
export class Barra1{

   @Output() promocionesClicked = new EventEmitter<void>();
  @Output() principalClicked = new EventEmitter<void>();
  emitirPromociones() {
    this.promocionesClicked.emit();
  }
  AMCprincipal() {
    this.principalClicked.emit();
  }

  @Input() usuario: any = null;


@Output() cerrarSesionClicked = new EventEmitter<void>();

  cerrarSesion() {
    this.cerrarSesionClicked.emit();
  }



}

