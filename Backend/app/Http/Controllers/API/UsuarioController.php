<?php

namespace App\Http\Controllers\API;

use App\Models\Usuario;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Usuario::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $usuario = Usuario::create($request->all());
        return response()->json($usuario, 201);
    }
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return response()->json(Usuario::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $usuario = Usuario::findOrFail($id);
        $usuario->update($request->all());
        return response()->json($usuario);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $usuario = Usuario::findOrFail($id);
        $usuario->delete();
        return response()->json(['message' => 'Usuario eliminado'], 200);
    }
}
