import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders, provideHttpClient } from '@angular/common/http';
import { withFetch } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-clogin-modal',
  imports: [FormsModule, CommonModule, HttpClientModule, RouterOutlet, RouterLink],
  templateUrl: './clogin-modal.html',
  styleUrl: './clogin-modal.css'
})
export class CLoginModal {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() loginSuccess = new EventEmitter<any>(); // Puedes emitir datos del usuario si el login es exitoso

  http = inject(HttpClient);
  constructor(private router: Router) { }
  
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  closeModal(): void {
    this.closeModalEvent.emit();
  }

  login(): void {
  if (!this.email || !this.password) {
    alert('Por favor completa todos los campos');
    return;
  }

  const payload = {
    email: this.email,
    password: this.password
  };

  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  this.http.post<any>('http://localhost:8000/api/login', JSON.stringify(payload), { headers }).subscribe({
    next: (response) => {
      console.log('Login exitoso:', response);
      localStorage.setItem('user', JSON.stringify(response.user));
      localStorage.setItem('token', response.access_token);
      this.loginSuccess.emit(response);

      // 🔴 Cerrar modal manualmente
      const modal = document.getElementById('loginModal');
      if (modal) {
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');
        modal.removeAttribute('aria-modal');
        modal.style.display = 'none';

        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
          backdrop.remove();
        }

        document.body.classList.remove('modal-open');
      }

      // 🔄 Recargar la página
      setTimeout(() => {
        location.reload();
      }, 300);
    },
    error: (error) => {
      console.error('Error en login:', error);
      alert(error.error?.message || 'Credenciales incorrectas');
    }
  });
}

}
