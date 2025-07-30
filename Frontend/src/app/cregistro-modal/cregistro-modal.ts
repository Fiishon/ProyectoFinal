import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cregistro-modal',
  imports: [FormsModule, CommonModule],
  templateUrl: './cregistro-modal.html',
  styleUrl: './cregistro-modal.css',
  standalone: true,
})
export class CRegistroModal {
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string | null = null;
  successMessage: string | null = null;

  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(private http: HttpClient) {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  registrarUsuario(): void {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const nuevoUsuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      password: this.password,
      rol: 'usuario', 
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    this.http.post('http://127.0.0.1:8000/api/usuarios', nuevoUsuario, { headers }).subscribe({
      next: (response) => {
        console.log('Usuario registrado:', response);
        this.successMessage = 'Usuario registrado exitosamente';
        // Aquí puedes cerrar el modal si es necesario
      },
      error: (error) => {
        console.error('Error al registrar usuario:', error);
       this.errorMessage = 'Error al registrar usuario. Por favor, inténtalo de nuevo.';
      },
    });
  }
}
