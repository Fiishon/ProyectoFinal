import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viaje-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './viajes-modal.html',
  styleUrl: './viajes-modal.css'
})
export class ViajeModalComponent {

  @Input() visible: boolean = false;
  @Input() modo: 'crear' | 'editar' = 'crear';
  @Input() viaje: any = {
    origen: '',
    destino: '',
    fecha: '',
    costo: ''
  };

  @Output() guardar = new EventEmitter<any>();
  @Output() cancelar = new EventEmitter<void>();

  submit() {
    if (!this.viaje.origen || !this.viaje.destino || !this.viaje.fecha || !this.viaje.costo) {
      alert('Por favor completa todos los campos.');
      return;
    }
    this.guardar.emit(this.viaje);
  }

  cerrar() {
    this.cancelar.emit();
  }
}
