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

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,
    BarraTitulo, Carrusel, CNosotros, CGaleria, CContacto,
    CLoginModal, CRegistroModal, CPromociones, Barra1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'FronEnd-AMC';
  // Variables para controlar la visibilidad de las secciones 
  @Output() closeModalEvent = new EventEmitter<void>();
  mostrarSoloPromociones: boolean = false;
  paginaprincipal: boolean = true;
  mostrarLogin: boolean = false;
  usuarioAutenticado: boolean = false;

  closeModal(): void {
    this.closeModalEvent.emit();
  }

   cerrarLogin() {
    this.mostrarLogin = false;
  }

  mostrarLoginn() {
    this.mostrarLogin = true;
    this.mostrarSoloPromociones = false;
    this.paginaprincipal = true;
  }
  
  mostrarPromociones() {
    this.mostrarSoloPromociones = true;
    this.paginaprincipal = false;
  }
  mostrarpaginaprincipal() {
    this.mostrarSoloPromociones = false;
    this.paginaprincipal = true;
  }

  onLoginSuccess(usuario: any) {
  this.usuarioAutenticado = true;
  this.paginaprincipal = true;
  this.mostrarSoloPromociones = false;
  this.cerrarLogin();
}

ngOnInit(): void {
  const user = localStorage.getItem('user');
  const token = localStorage.getItem('token');

  if (user && token) {
    this.usuarioAutenticado = true;
    // Puedes usar JSON.parse(user) si necesitas los datos
  }
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
