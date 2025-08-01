import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comprar-boleto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comprar-boleto.html',
  styleUrls: ['./comprar-boleto.css']
})
export class ComprarBoletosComponent implements OnInit {
  viajes: any[] = [];
  viajeSeleccionado: any = null;
  boletoComprado: any = null;

  paginaActual: number = 1;
elementosPorPagina: number = 10;

get viajesPaginados() {
  const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
  const fin = inicio + this.elementosPorPagina;
  return this.viajes.slice(inicio, fin);
}

get totalPaginas() {
  return Math.ceil(this.viajes.length / this.elementosPorPagina);
}

paginaAnterior() {
  if (this.paginaActual > 1) this.paginaActual--;
}

paginaSiguiente() {
  if (this.paginaActual < this.totalPaginas) this.paginaActual++;
}

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarViajes();
  }

  cargarViajes() {
    this.http.get<any[]>('http://localhost:8000/api/viajes')
      .subscribe(data => this.viajes = data);
  }

  seleccionarViaje(viaje: any) {
    this.viajeSeleccionado = viaje;
    this.boletoComprado = null;
  }

  comprarBoleto() {
    if (!this.viajeSeleccionado) {
      alert('Por favor selecciona un viaje');
      return;
    }

    const usuario = JSON.parse(localStorage.getItem('user')!);

    const data = {
      id_viaje: this.viajeSeleccionado.id,
      id_usuario: usuario.id
    };

    this.http.post('http://localhost:8000/api/boletos/comprar', data).subscribe({
      next: (boleto: any) => {
        alert('Compra exitosa');
        this.boletoComprado = boleto; // El boleto con asiento asignado
        this.viajeSeleccionado = null; // Opcional: limpiar selección
      },
      error: err => {
        console.error('Error al comprar boleto:', err);
        alert(err.error?.error || 'Error al comprar boleto');
      }
    });
  }
}
