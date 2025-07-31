import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-barra1',
  imports: [RouterModule],
  templateUrl: './barra1.html',
  styleUrl: './barra1.css'
})
export class Barra1{
mostrarSubmenu = false;

toggleSubmenu() {
  this.mostrarSubmenu = !this.mostrarSubmenu;
}

cerrarSubmenu() {
  this.mostrarSubmenu = false;
}

  constructor(private router: Router) {}

   @Output() promocionesClicked = new EventEmitter<void>();
  @Output() principalClicked = new EventEmitter<void>();
   @Output() viajesClicked = new EventEmitter<void>();
  emitirViajes() {
    this.viajesClicked.emit();
  }

  verViajes() {
  this.router.navigate(['viajes']);
}

irAComprar() {
  this.router.navigate(['comprar-boletos']);
}


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

