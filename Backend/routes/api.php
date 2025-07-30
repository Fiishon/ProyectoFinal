<?php

use App\Http\Controllers\API\UsuarioController;
use App\Http\Controllers\API\ProductoController;
use App\Http\Controllers\API\AuthController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Models\Usuario;
use Illuminate\Support\Facades\Hash;


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
