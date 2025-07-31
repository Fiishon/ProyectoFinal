import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BoletoService {

  private apiUrl = 'http://localhost:8000/api';
  constructor(private http: HttpClient) {}

  comprarBoleto(idUsuario: number, idViaje: number) {
    return this.http.post('http://localhost:8000/api/comprar-boleto', {
      id_usuario: idUsuario,
      id_viaje: idViaje,
    });
  }
}
