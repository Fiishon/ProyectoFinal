<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Viaje extends Model
{
    /** @use HasFactory<\Database\Factories\ViajeFactory> */
    use HasFactory;

    protected $fillable = [
        'origen',
        'destino',
        'hora',
        'fecha',
        'costo',
    ];
}
