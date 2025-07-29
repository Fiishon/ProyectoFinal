import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AdminUsuarios } from '../admin-usuarios/admin-usuarios';
import { RouterOutlet, Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-barra-admin',
  imports: [AdminUsuarios, RouterOutlet],
  templateUrl: './barra-admin.html',
  styleUrl: './barra-admin.css'
})
export class BarraAdmin {

  @Output() promocionesClicked = new EventEmitter<void>();
  @Output() principalClicked = new EventEmitter<void>();
  @Output() mostrarusuariosClicked = new EventEmitter<void>();
  @Output() mostrarviajesClicked = new EventEmitter<void>();
  router: any;
  emitirPromociones() {
    this.promocionesClicked.emit();
  }
  AMCprincipal() {
    this.principalClicked.emit();
  }

  mostrarUsuarios() {
    this.mostrarusuariosClicked.emit();
  }

  mostrarViajes() {
    this.mostrarviajesClicked.emit();
  }

  @Input() admin: any = null;
  @Input() usuario: any = null;


@Output() cerrarSesionClicked = new EventEmitter<void>();


  cerrarSesion() {
    this.cerrarSesionClicked.emit();
  }
}
