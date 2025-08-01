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

  emitirViajes() {
    this.router.navigate(['viajes']);
  }

  verViajes() {
  this.router.navigate(['viajes']);
}

irAComprar() {
  this.router.navigate(['comprar-boletos']);
}

  AMCprincipal() {
    this.router.navigate(['']);
  }

  @Input() usuario: any = null;


@Output() cerrarSesionClicked = new EventEmitter<void>();

  cerrarSesion() {
    this.cerrarSesionClicked.emit();
  }
}

