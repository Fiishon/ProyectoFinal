

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cgaleria',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cgaleria.html',
  styleUrls: ['./cgaleria.css']
})
export class CGaleria {
  destinos = [
    {
      imagen: '/Destino1.jpg',
      titulo: 'CDMX - Veracruz',
      descripcion: 'Visita el Puerto más grande del país',
    },
    {
      imagen: '/destino2.jpg',
      titulo: 'Mérida - Villahermosa',
      descripcion: 'Descubre las zonas arqueológicas llenas de historia',
    },
    {
      imagen: '/Destino3.jpg',
      titulo: 'CDMX - Oaxaca',
      descripcion: 'Disfruta de los encantadores rincones de Oaxaca',
    },
    {
      imagen: '/Destino1.jpg',
      titulo: 'CDMX - Oaxaca',
      descripcion: 'Disfruta de los encantadores rincones de Oaxaca',
    },
    {
      imagen: '/Destino5.jpg',
      titulo: 'CDMX - Oaxaca',
      descripcion: 'Disfruta de los encantadores rincones de Oaxaca',
    },
    {
      imagen: '/Destino6.jpg',
      titulo: 'CDMX - Oaxaca',
      descripcion: 'Disfruta de los encantadores rincones de Oaxaca',
    },
    {
      imagen: '/Destino7.jpg',
      titulo: 'CDMX - Oaxaca',
      descripcion: 'Disfruta de los encantadores rincones de Oaxaca',
    },
    {
      imagen: '/Destino8.jpg',
      titulo: 'CDMX - Oaxaca',
      descripcion: 'Disfruta de los encantadores rincones de Oaxaca',
    },
  ];
   modalVisible = false;
  destinoSeleccionado: any = null;

  abrirModal(destino: any) {
    this.destinoSeleccionado = destino;
    this.modalVisible = true;
  }

  cerrarModal() {
    this.modalVisible = false;
    this.destinoSeleccionado = null;
  }
}
