<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Usuario extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'usuarios';
    protected $primaryKey = 'id';

    protected $fillable = [
        'nombre',
        'apellido',
        'email', // Cambiado a 'email' para consistencia
        'password', // Cambiado a 'password' para consistencia
        'rol',
    ];

    protected $hidden = [
        'password', // Cambiado a 'password'
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // Cambiar el nombre del campo para la autenticación
    public function getAuthPasswordName(): string
    {
        return 'password';
    }

    // Mutador para el campo email (opcional)
    protected function email(): Attribute
    {
        return Attribute::make(
            set: fn (string $value) => strtolower($value),
        );
    }

    // Mutador para el campo password (hashing automático)
    protected function password(): Attribute
    {
        return Attribute::make(
            set: fn (string $value) => bcrypt($value),
        );
    }
}