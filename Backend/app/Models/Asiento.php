<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Asiento extends Model
{
    /** @use HasFactory<\Database\Factories\AsientoFactory> */
    use HasFactory;

    public function autobus() {
    return $this->belongsTo(Autobus::class, 'id_autobus');
}

}
