<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Boleto;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\BoletoComprado;

class BoletoController extends Controller
{
    public function comprar(Request $request)
    {
        $validated = $request->validate([
            'id_usuario' => 'required|exists:users,id',
            'id_viaje' => 'required|exists:viajes,id',
        ]);

        // Guardar boleto
        $boleto = Boleto::create([
            'id_usuario' => $validated['id_usuario'],
            'id_viaje' => $validated['id_viaje'],
        ]);

        // Obtener usuario
        $user = User::find($validated['id_usuario']);

        // Enviar correo
        Mail::to($user->email)->send(new BoletoComprado($boleto));

        return response()->json(['message' => 'Boleto comprado y enviado por correo.']);
    }
}
