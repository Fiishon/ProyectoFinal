<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Boleto;
use App\Models\Usuario;
use Illuminate\Support\Facades\Mail;
use App\Mail\BoletoComprado;
use Illuminate\Support\Carbon;
use App\Models\Asiento;
use App\Models\Viaje;

class BoletoController extends Controller
{
    public function comprar(Request $request)
{
    $request->validate([
        'id_usuario' => 'required|exists:usuarios,id',
        'id_viaje' => 'required|exists:viajes,id',
    ]);

    // Obtener datos enviados
    $idUsuario = $request->input('id_usuario');
    $idViaje = $request->input('id_viaje');

    // Obtener el precio del viaje desde la tabla viajes
    $viaje = Viaje::find($idViaje);
    if (!$viaje) {
        return response()->json(['error' => 'Viaje no encontrado'], 404);
    }

    // Asignar asiento al azar (ejemplo simple: elige un asiento no vendido)
    $asiento = Asiento::where('disponible', 1)
    ->inRandomOrder()
    ->first();

if (!$asiento) {
    return response()->json(['error' => 'No hay asientos disponibles'], 400);
}


    // Crear el boleto con datos automáticos
    $boleto = new Boleto();
    $boleto->id_usuario = $idUsuario;
    $boleto->id_viaje = $idViaje;
    $boleto->id_asiento = $asiento->id;
    $boleto->precio = $viaje->costo;
    $boleto->estado = 'vendido';
    $boleto->fecha_compra = now();

    $boleto->save();

    

    return response()->json($boleto, 201);
}

}
