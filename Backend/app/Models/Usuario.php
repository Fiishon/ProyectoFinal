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
}