import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioModalComponent } from '../usuarios-modal/usuarios-modal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-usuarios',
  standalone: true,
  imports: [FormsModule, CommonModule, UsuarioModalComponent],
  templateUrl: './admin-usuarios.html',
  styleUrl: './admin-usuarios.css'
})
export class AdminUsuarios {

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

  usuarios: any[] = [];
  filtro: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.http.get<any[]>('http://localhost:8000/api/usuarios')
      .subscribe(data => this.usuarios = data);
      console.log('Usuarios cargados:', this.usuarios);
  }

  eliminarUsuario(id: number) {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.http.delete(`http://localhost:8000/api/usuarios/${id}`)
        .subscribe(() => this.cargarUsuarios());
    }
  }

  filtrarUsuarios(): any[] {
    return this.usuarios.filter(usuario =>
      usuario.nombre.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  modalVisible: boolean = false;
modoEdicion: 'crear' | 'editar' = 'crear';
usuarioActual: any = {};


  abrirModalNuevo() {
  this.modoEdicion = 'crear';
  this.usuarioActual = {
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  };
  this.modalVisible = true;
}

abrirModalEditar(usuario: any) {
  this.modoEdicion = 'editar';
  this.usuarioActual = { 
    nombre: '',
    apellido: '',
    email: '',
    rol: 'usuario',
    password: ''}; 
  this.modalVisible = true;
}

cerrarModal() {
  this.modalVisible = false;
}

guardarUsuario(usuario: any) {
  console.log('Enviando usuario al backend:', usuario);
  if (this.modoEdicion === 'crear') {
    this.http.post('http://localhost:8000/api/usuarios', usuario)
      .subscribe(() => {
        this.cargarUsuarios();
        this.cerrarModal();
      });
  } else {
    this.http.put(`http://localhost:8000/api/usuarios/${usuario.id}`, usuario)
      .subscribe(() => {
        this.cargarUsuarios();
        this.cerrarModal();
      });
  }
}

}
