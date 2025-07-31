import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AdminUsuarios } from '../admin-usuarios/admin-usuarios';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-barra-admin',
  imports: [AdminUsuarios, RouterModule,],
  templateUrl: './barra-admin.html',
  styleUrl: './barra-admin.css'
})
export class BarraAdmin {

  constructor(private router: Router) {}

  @Output() promocionesClicked = new EventEmitter<void>();
  @Output() principalClicked = new EventEmitter<void>();
  @Output() mostrarusuariosClicked = new EventEmitter<void>();
  @Output() mostrarviajesClicked = new EventEmitter<void>();
  @Output() mostrarAviajesClicked = new EventEmitter<void>();
  modalVisible = false;
  abrirModal() {
    this.modalVisible = true;
  }
  cerrarModal(){
    this.modalVisible = false;
  }
  emitirPromociones() {
    this.promocionesClicked.emit();
  }
  AMCprincipal() {
    this.principalClicked.emit();
  }

  mostrarUsuarios() {
  // Cierra el modal manualmente
  const modal = document.getElementById('userInfoModal');
  if (modal) {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('aria-modal');
    modal.style.display = 'none';

    // Elimina el backdrop (fondo oscuro)
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.remove();
    }

    // Elimina la clase overflow del body
    document.body.classList.remove('modal-open');
    document.body.style.removeProperty('padding-right');
  }

  // Redirige a la ruta de la tabla de usuarios
  this.router.navigate(['admin-usuarios']);
}


  mostrarAdViajes() {
  // Cierra el modal manualmente
  const modal = document.getElementById('userInfoModal');
  if (modal) {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('aria-modal');
    modal.style.display = 'none';

    // Elimina el backdrop (fondo oscuro)
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.remove();
    }

    // Elimina la clase overflow del body
    document.body.classList.remove('modal-open');
    document.body.style.removeProperty('padding-right');
  }

  // Redirige a la ruta para gestionar viajes
  this.router.navigate(['admin-viajes']);
}


  @Input() admin: any = null;
  @Input() usuario: any = null;


@Output() cerrarSesionClicked = new EventEmitter<void>();


  cerrarSesion() {
    this.cerrarSesionClicked.emit();
    this.router.navigate(['/']);
  }
}
