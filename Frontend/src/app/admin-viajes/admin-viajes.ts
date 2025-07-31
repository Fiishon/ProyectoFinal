import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ViajeModalComponent } from '../viajes-modal/viajes-modal';

@Component({
  selector: 'app-admin-viajes',
  standalone: true,
  imports: [FormsModule, CommonModule, ViajeModalComponent],
  templateUrl: './admin-viajes.html',
  styleUrl: './admin-viajes.css'
})
export class AdminViajes {

  viajes: any[] = [];
  filtro: string = '';
  modalVisible = false;
  modoEdicion: 'crear' | 'editar' = 'crear';
  viajeActual: any = {
    origen: '',
    destino: '',
    fecha: '',
    precio: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarViajes();
  }

  cargarViajes() {
    this.http.get<any[]>('http://localhost:8000/api/viajes')
      .subscribe(data => this.viajes = data);
  }

  filtrarViajes() {
    return this.viajes.filter(v =>
      v.origen.toLowerCase().includes(this.filtro.toLowerCase()) ||
      v.destino.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  abrirModalNuevo() {
    this.modoEdicion = 'crear';
    this.viajeActual = {
      origen: '',
      destino: '',
      fecha: '',
      precio: ''
    };
    this.modalVisible = true;
  }

  abrirModalEditar(viaje: any) {
    this.modoEdicion = 'editar';
    this.viajeActual = { ...viaje };
    this.modalVisible = true;
  }

  cerrarModal() {
    this.modalVisible = false;
  }

  guardarViaje(viaje: any) {
    if (this.modoEdicion === 'crear') {
      this.http.post('http://localhost:8000/api/viajes', viaje)
        .subscribe(() => {
          this.cargarViajes();
          this.cerrarModal();
        });
    } else {
      this.http.put(`http://localhost:8000/api/viajes/${viaje.id}`, viaje)
        .subscribe(() => {
          this.cargarViajes();
          this.cerrarModal();
        });
    }
  }

  eliminarViaje(id: number) {
    if (confirm('¿Eliminar este viaje?')) {
      this.http.delete(`http://localhost:8000/api/viajes/${id}`)
        .subscribe(() => this.cargarViajes());
    }
  }
}
