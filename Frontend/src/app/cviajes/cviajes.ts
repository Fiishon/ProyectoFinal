import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BoletoService } from '../services/boleto';

@Component({
  selector: 'app-cviajes',
  imports: [CommonModule, FormsModule],
  templateUrl: './cviajes.html',
  styleUrl: './cviajes.css'
})
export class CViajes implements OnInit {
  viajes: any[] = [];
  viajesFiltrados: any[] = [];
  filtro: string = '';
  viajesFiltradosPaginados: any[] = [];
paginaActual: number = 1;
elementosPorPagina: number = 5;
totalPaginas: number = 1;


  constructor(private boletoService: BoletoService, private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerViajes();
  }

obtenerViajes() {
  const usuarioString = localStorage.getItem('user');

  if (usuarioString) {
    const usuario = JSON.parse(usuarioString);
    const userId = usuario.id;

    this.http.get<any[]>(`http://localhost:8000/api/viajes-usuario/${userId}`)
      .subscribe({
        next: (data) => {
          this.viajes = data;
          this.viajesFiltrados = data;
          this.paginaActual = 1;
          this.actualizarPaginacion(); // <-- Inicializa la paginación
        },
        error: (err) => {
          console.error('Error al obtener viajes:', err);
        }
      });
  } else {
    console.error('No se encontró información del usuario en localStorage');
  }
}

  aplicarFiltro() {
  this.viajesFiltrados = this.viajes.filter(v =>
    v.origen.toLowerCase().includes(this.filtro.toLowerCase()) ||
    v.destino.toLowerCase().includes(this.filtro.toLowerCase())
  );
  this.paginaActual = 1;
  this.actualizarPaginacion();
}

  filtrar(tipo: string) {
  const hoy = new Date();
  if (tipo === 'proximos') {
    this.viajesFiltrados = this.viajes.filter(v => new Date(v.fecha) >= hoy);
  } else if (tipo === 'anteriores') {
    this.viajesFiltrados = this.viajes.filter(v => new Date(v.fecha) < hoy);
  }
  this.paginaActual = 1;
  this.actualizarPaginacion();
}

  buscarBoleto() {
    alert('Función buscar boleto próximamente...');
  }

  actualizarPaginacion() {
  this.totalPaginas = Math.ceil(this.viajesFiltrados.length / this.elementosPorPagina);
  const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
  const fin = inicio + this.elementosPorPagina;
  this.viajesFiltradosPaginados = this.viajesFiltrados.slice(inicio, fin);
}

paginaAnterior() {
  if (this.paginaActual > 1) {
    this.paginaActual--;
    this.actualizarPaginacion();
  }
}

paginaSiguiente() {
  if (this.paginaActual < this.totalPaginas) {
    this.paginaActual++;
    this.actualizarPaginacion();
  }
}


  comprarBoleto(idViaje: number) {
    const usuario = JSON.parse(localStorage.getItem('user') || '{}');

    this.boletoService.comprarBoleto(usuario.id, idViaje).subscribe({
      next: () => alert('¡Boleto comprado y enviado a tu correo!'),
      error: () => alert('Error al comprar boleto, intenta más tarde.')
    });
  }
}