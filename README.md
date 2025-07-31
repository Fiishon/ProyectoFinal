# Sistema de Venta de Boletos de Autobús - AMC

Este proyecto es un sistema integrado para la gestión y venta de boletos de autobús, desarrollado con **Angular** (frontend) y **Laravel** (backend), utilizando **MySQL** como base de datos.

---

## 📋 Descripción del Proyecto

**ViajeSeguro** es una plataforma diseñada para empresas de transporte que permite:

- Venta de boletos en línea
- Gestión de rutas y horarios
- Control de usuarios (clientes y administradores)

---

## 🛠️ Tecnologías Utilizadas

### Frontend

- Angular 15+
- TypeScript
- HTML5 / CSS3
- Bootstrap 5

### Backend

- Laravel 10
- PHP 8.1+


### Base de Datos

- MySQL 8.0
- Diseñado con MySQL Workbench

### Otros

- Git para control de versiones

---

## 🗃️ Estructura de la Base de Datos

Principales entidades del sistema:

- `usuarios`: clientes, administradores, operadores
- `autobuses`: datos de la flota vehicular
- `viajes`: fechas, horarios, autobús asignado
- `boletos`: información de ventas y asientos

---

## 🔧 Instalación y Configuración

### Requisitos Previos

- Node.js 16+
- PHP 8.1+
- Composer
- MySQL 8.0+
- Angular CLI

---

## 📦 Instalación

### Frontend (Angular)

bash
cd frontend
npm install
ng serve

Ventana principal


<img width="2880" height="1920" alt="image" src="https://github.com/user-attachments/assets/c60621ca-eaf1-4571-a7b0-ee873c3552a3" />


Galeria del sistema


<img width="2880" height="1920" alt="image" src="https://github.com/user-attachments/assets/fa6716d5-fcb0-449e-b1b6-761e815e8a5d" />


Promociones en la venta de boletos

<img width="2880" height="1920" alt="image" src="https://github.com/user-attachments/assets/5d6721d4-6da5-4ee7-ab06-8b6943880f92" />



Login al sistema.


<img width="2880" height="1920" alt="image" src="https://github.com/user-attachments/assets/733407ba-938b-4f5e-8c43-0e681914950e" />



Registro en el sistema


<img width="2880" height="1920" alt="image" src="https://github.com/user-attachments/assets/6e3b14d0-6a2d-4862-9c06-409260730657" />



Sección de "Mis Viajes" con un usuario normal.
Podemos filtrar nuestros viajes en esta tabla, se registran todos nuestros viajes realizados y proximos a realizar

<img width="2880" height="1920" alt="image" src="https://github.com/user-attachments/assets/3c2b349c-d6d7-4385-9ba8-a26dddbdb2ef" />



Backend (Laravel)
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve

