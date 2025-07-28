import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-barra1',
  imports: [],
  templateUrl: './barra1.html',
  styleUrl: './barra1.css'
})
export class Barra1 {

   @Output() promocionesClicked = new EventEmitter<void>();
  @Output() principalClicked = new EventEmitter<void>();
  emitirPromociones() {
    this.promocionesClicked.emit();
  }
  AMCprincipal() {
    this.principalClicked.emit();
  }

  @Input() usuario: any = null;

ngOnInit() {
  const userString = localStorage.getItem('user');

  if (userString) {
    try {
      this.usuario = JSON.parse(userString);
      console.log('Usuario cargado en barra1:', this.usuario);
    } catch (e) {
      console.error('Error al parsear usuario:', e);
    }
  } else {
    console.warn('No hay usuario guardado en localStorage');
  }
}

@Output() cerrarSesionClicked = new EventEmitter<void>();

  cerrarSesion() {
    this.cerrarSesionClicked.emit();
  }



}

