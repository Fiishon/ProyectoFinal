import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cpromociones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cpromociones.html',
  styleUrl: './cpromociones.css'
})
export class CPromociones {
  promos = [
    {
      imagen: '/hotsale.jpg',
      titulo: 'Hot Sale',
      descripcion: 'Promociones por tiempo limitado',
    },
    {
      imagen: '/buenfin.avif',
      titulo: 'Buen Fin',
      descripcion: 'Promociones especiales para el Buen Fin',
    }
  ];
   modalVisible = false;
  promoSeleccionado: any = null;

  abrirModal(promo: any) {
    this.promoSeleccionado = promo;
    this.modalVisible = true;
  }

  cerrarModal() {
    this.modalVisible = false;
    this.promoSeleccionado = null;
  }

}
