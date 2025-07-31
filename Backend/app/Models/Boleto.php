<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Boleto extends Model
{
    /** @use HasFactory<\Database\Factories\BoletoFactory> */
    use HasFactory;

    protected $fillable = [
        'id',
        'estado',
        'precio',
        'id_asiento',
        'id_viaje',
        'id_usuario',
        'fecha_compra',
    ];

    public function usuario()
{
    return $this->belongsTo(User::class, 'id_usuario');
}

public function asiento()
{
    return $this->belongsTo(Asiento::class, 'id_asiento');
}

public function viaje()
{
    return $this->belongsTo(Viaje::class, 'id_viaje');
}

}
