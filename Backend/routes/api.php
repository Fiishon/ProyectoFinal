<?php

use App\Http\Controllers\API\UsuarioController;
use App\Http\Controllers\API\ProductoController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\AsientoController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Models\Usuario;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\API\ViajeController;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\API\BoletoController;
use App\Models\Viaje;

Route::get('/usuarios', [UsuarioController::class, 'index']);
Route::get('/usuarios/{id}', [UsuarioController::class, 'show']);
Route::post('/usuarios', [UsuarioController::class, 'store']);
Route::put('/usuarios/{id}', [UsuarioController::class, 'update']);
Route::delete('/usuarios/{id}', [UsuarioController::class, 'destroy']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);
Route::middleware('auth:sanctum')->get('/me', [AuthController::class, 'me']);

Route::get('/viajes-usuario/{id}', function ($id) {
    return DB::table('boletos')
        ->join('viajes', 'boletos.id_viaje', '=', 'viajes.id')
        ->where('boletos.id_usuario', $id)
        ->select('viajes.origen', 'viajes.destino', 'viajes.fecha', 'viajes.hora', 'viajes.costo')
        ->get();
});

Route::get('/viajes', [ViajeController::class, 'index']);
Route::post('/viajes', [ViajeController::class, 'store']);
Route::put('/viajes/{id}', [ViajeController::class, 'update']);
Route::delete('/viajes/{id}', [ViajeController::class, 'destroy']);
Route::post('/boletos/comprar', [BoletoController::class, 'comprar']);
Route::get('/asientos/{id}', [AsientoController::class, 'show']);
Route::post('/boletos', [BoletoController::class, 'store']);
Route::post('/boletos', function (Request $request) {
    // Validar datos básicos (opcional pero recomendado)
    $request->validate([
        'id_usuario' => 'required|integer',
        'id_viaje' => 'required|integer',
        'id_asiento' => 'required|string|max:5',
    ]);

    // Insertar boleto en la tabla
    DB::table('boletos')->insert([
        'id_usuario' => $request->id_usuario,
        'id_viaje' => $request->id_viaje,
        'id_asiento' => $request->id_asiento,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    return response()->json(['message' => 'Boleto creado con éxito']);
});
Route::get('/asientos/{viajeId}', [AsientoController::class, 'obtenerDisponiblesPorViaje']);;
Route::post('/boletos/crear', [BoletoController::class, 'crearConAsientoAutomatico']);
Route::get('/asientos-disponibles', [AsientoController::class, 'getAsientosDisponibles']);