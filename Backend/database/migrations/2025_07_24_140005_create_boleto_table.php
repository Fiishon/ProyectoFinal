<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('boletos', function (Blueprint $table) {
            $table->id();
            $table->string('estado'); // Estado del boleto (ej: vendido, reservado, cancelado)
            $table->decimal('precio', 8, 2); // Precio del boleto
            $table->foreignId('id_asiento')->constrained('asientos')->onDelete('cascade'); // Relación con la tabla asiento
            $table->foreignId('id_viaje')->constrained('viajes')->onDelete('cascade'); // Relación con la tabla viaje
            $table->foreignId('id_usuario')->constrained('usuarios')->onDelete('cascade'); // Relación con la tabla usuarios
            $table->dateTime('fecha_compra'); // Fecha y hora de compra del boleto
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('boleto');
    }
};
