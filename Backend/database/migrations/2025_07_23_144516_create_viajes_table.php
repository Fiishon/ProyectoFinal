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
        Schema::create('viajes', function (Blueprint $table) {
            $table->id();
            $table->string('origen');
            $table->string('destino');
            $table->time('hora'); // Hora en formato 24 horas
            $table->dateTime('fecha'); // Fecha y hora del viaje
            $table->decimal('costo', 8, 2); // Costo del viaje, por ejemplo 9999.99
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('viajes');
    }
};
