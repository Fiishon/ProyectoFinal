# Sistema de Venta de Boletos de Autobús - AMC

Este proyecto es un sistema integrado para la gestión y venta de boletos de autobús, desarrollado con **Angular** (frontend) y **Laravel** (backend), utilizando **MySQL** como base de datos.

---

## 📋 Descripción del Proyecto

**ViajeSeguro** es una plataforma diseñada para empresas de transporte que permite:

- Venta de boletos en línea
- Gestión de rutas y horarios
- Administración de flota de autobuses
- Control de usuarios (clientes y administradores)
- Reportes de ventas y ocupación

---

## 🛠️ Tecnologías Utilizadas

### Frontend

- Angular 15+
- TypeScript
- HTML5 / CSS3
- Bootstrap 5
- RxJS (manejo de estados)

### Backend

- Laravel 10
- PHP 8.1+
- Eloquent ORM
- API RESTful

### Base de Datos

- MySQL 8.0
- Diseñado con MySQL Workbench
- Estructura relacional optimizada para transacciones

### Otros

- JWT para autenticación
- Docker (opcional para despliegue)
- Git para control de versiones

---

## 🗃️ Estructura de la Base de Datos

Principales entidades del sistema:

- `usuarios`: clientes, administradores, operadores
- `autobuses`: datos de la flota vehicular
- `rutas`: origen, destino, paradas intermedias
- `viajes`: fechas, horarios, autobús asignado
- `boletos`: información de ventas y asientos
- `pagos`: registro de transacciones

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

```bash
cd frontend
npm install
ng serve
