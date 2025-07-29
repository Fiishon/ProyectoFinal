import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Barra1 } from './barra1/barra1';

import { BarraTitulo } from './barra-titulo/barra-titulo';
import { Carrusel } from './carrusel/carrusel';
import { CNosotros } from './cnosotros/cnosotros';
import { CGaleria } from './cgaleria/cgaleria';
import { CContacto } from './ccontacto/ccontacto';
import { CLoginModal } from "./clogin-modal/clogin-modal";
import { CRegistroModal } from './cregistro-modal/cregistro-modal';
import { CPromociones } from "./cpromociones/cpromociones";
import { BarraAdmin } from "./barra-admin/barra-admin";
import { AdminUsuarios } from "./admin-usuarios/admin-usuarios";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,
    BarraTitulo, Carrusel, CNosotros, CGaleria, CContacto,
    CLoginModal, CRegistroModal, CPromociones, Barra1, BarraAdmin, AdminUsuarios],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'FronEnd-AMC';
  @Output() closeModalEvent = new EventEmitter<void>();
  mostrarSoloPromociones: boolean = false;
  paginaprincipal: boolean = true;
  mostrarLogin: boolean = false;
  usuarioAutenticado: boolean = false;
  usuario: any = null;
  mostrarusuarios: boolean = false;
  mostrarviajes: boolean = false;

  ngOnInit(): void {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    this.usuario = JSON.parse(storedUser);
    this.usuarioAutenticado = true;
  }
}

  closeModal(): void {
    this.closeModalEvent.emit();
  }

  abrirLogin() {
    this.mostrarLogin = true;
  }

   cerrarLogin() {
    this.mostrarLogin = false;
  }
  
  mostrarPromociones() {
    this.mostrarSoloPromociones = true;
    this.paginaprincipal = false;
  }
  mostrarpaginaprincipal() {
    this.mostrarSoloPromociones = false;
    this.paginaprincipal = true;
    this.mostrarusuarios = false;
  }

  mostrarUsuariosClicked() {
  this.mostrarusuarios = true;
  this.paginaprincipal = false;
  this.mostrarSoloPromociones = false;
  console.log('Estado:', this.mostrarusuarios, this.paginaprincipal);
  }

  mostrarViajes() {
    this.mostrarviajes = true;
    this.paginaprincipal = false;
  }

  onLoginSuccess(response: any): void {
  this.usuario = response.user;
  this.usuarioAutenticado = true;
  this.mostrarLogin = false;
}

cerrarSesion(): void {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  this.usuarioAutenticado = false;
  this.mostrarLogin = false;
  this.paginaprincipal = true;
  setTimeout(() => {
        location.reload();
      }, 300);
}

}
