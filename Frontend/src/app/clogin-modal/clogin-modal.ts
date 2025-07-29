import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clogin-modal',
  imports: [FormsModule, CommonModule],
  templateUrl: './clogin-modal.html',
  styleUrl: './clogin-modal.css'
})
export class CLoginModal {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  errorMessage: string | null = null;
  isLoading: boolean = false;
  successMessage: string | null = null;

  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() loginSuccess = new EventEmitter<any>();

  http = inject(HttpClient);
  constructor(private router: Router) { }
  
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  closeModal(): void {
    this.closeModalEvent.emit();
  }

  login(): void {
    // Resetear mensajes de error
    this.errorMessage = null;
    
    // Validación básica del frontend
    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor completa todos los campos';
      return;
    }

    // Validación de formato de email
    if (!this.validateEmail(this.email)) {
      this.errorMessage = 'Por favor ingresa un correo electrónico válido';
      return;
    }

    this.isLoading = true;
    
    const payload = {
      email: this.email,
      password: this.password
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    this.http.post<any>('http://localhost:8000/api/login', payload, { headers }).subscribe({
  next: (response) => {
    this.isLoading = false;
    console.log('Login exitoso:', response);
    this.successMessage = 'Login exitoso';
    localStorage.setItem('token', response.access_token);

    // Ahora obtenemos los datos del usuario
    const authHeaders = new HttpHeaders({
      'Authorization': `Bearer ${response.access_token}`,
      'Accept': 'application/json'
    });

    this.http.get<any>('http://localhost:8000/api/me', { headers: authHeaders }).subscribe({
      next: (userResponse) => {
        
        console.log('Datos del usuario:', userResponse);

        const user = userResponse.usuario;

        localStorage.setItem('user', JSON.stringify(user));
        this.loginSuccess.emit({ user });
        
        this.closeModal();

      },
      error: (error) => {
        console.error('Error al obtener el usuario:', error);
        this.errorMessage = 'No se pudo obtener la información del usuario.';
      }
    });
  },
  error: (error: HttpErrorResponse) => {
    this.isLoading = false;
    console.error('Error en login:', error);
    this.errorMessage = error.error?.message || 'Error inesperado en login';
  }
});
  }

  private validateEmail(email: string): boolean {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }
  
}