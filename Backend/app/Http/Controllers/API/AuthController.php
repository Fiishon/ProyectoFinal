<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Models\Usuario;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    public function login(Request $request)
{
    $request->validate([
        'email' => 'required|email',
        'password' => 'required'
    ]);

    \Log::info('Login payload:', $request->all());


    // Corrección aquí: usar $request->email en lugar de $request->correo
    $usuario = Usuario::where('email', $request->email)->first();

    // Corrección aquí: usar $request->password y $usuario->password
    if (!$usuario || !Hash::check($request->password, $usuario->password)) {
        throw ValidationException::withMessages([
            'email' => ['Las credenciales proporcionadas son incorrectas.'],
        ]);
    }

    $token = $usuario->createToken('auth_token')->plainTextToken;

    return response()->json([
        'status' => 'success',
        'message' => 'Usuario autenticado correctamente',
        'access_token' => $token,
        'token_type' => 'Bearer',
        'user' => auth()->user()  // <-- Agrega esta línea
    ]);
}

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        
        return response()->json([
            'status' => 'success',
            'message' => 'Sesión cerrada correctamente'
        ]);
    }

    public function me(Request $request)
    {
        $usuario = $request->user();
        
        return response()->json([
            'status' => 'success',
            'usuario' => [
                'id' => $usuario->id,
                'nombre' => $usuario->nombre,
                'apellido' => $usuario->apellido,
                'email' => $usuario->email,
                'rol' => $usuario->rol
            ]
        ]);
    }
}