import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario-modal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './usuarios-modal.html',
  styleUrls: ['./usuarios-modal.css']
})
export class UsuarioModalComponent {
  @Input() visible: boolean = false;
  @Input() modo: 'crear' | 'editar' = 'crear';
  @Input() usuario: any = {
    nombre: '',
    email: '',
    rol: 'usuario',
    password: ''
  };

  @Output() guardar = new EventEmitter<any>();
  @Output() cancelar = new EventEmitter<void>();

  submit() {
    if (!this.usuario.nombre || !this.usuario.email || (this.modo === 'crear' && !this.usuario.password)) {
      alert('Por favor completa todos los campos requeridos.');
      return;
    }
    this.guardar.emit(this.usuario);
  }

  cerrar() {
    this.cancelar.emit();
  }
}
