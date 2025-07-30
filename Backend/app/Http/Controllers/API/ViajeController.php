<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Viaje;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ViajeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // This method should return a list of viajes
        // For now, we will return an empty response
        return response()->json(Viaje::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $usuario = Viaje::create($request->all());
        return response()->json($usuario, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // This method should return a specific viaje by ID
        // For now, we will return an empty response
        return response()->json(Viaje::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $viaje = Viaje::findOrFail($id);
        $viaje->update($request->all());
        return response()->json($viaje);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $viaje = Viaje::findOrFail($id);
        $viaje->delete();
        return response()->json(['message' => 'Viaje eliminado'], 200);
    }
}
