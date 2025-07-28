<?php

namespace Database\Factories;

use App\Models\Boleto;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Boleto>
 */
class BoletoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Boleto::class;
    public function definition(): array
    {
        return [
            'estado' => $this->faker->randomElement(['vendido', 'reservado', 'cancelado']), // Estado del boleto
            'precio' => $this->faker->randomFloat(2, 10, 100), // Precio del boleto entre 10 y 100
            'id_asiento' => \App\Models\Asiento::factory(), // Relación con la tabla asiento
            'id_viaje' => \App\Models\Viaje::factory(), // Relación con la tabla viaje
            'id_usuario' => \App\Models\Usuario::factory(), // Relación con la tabla usuarios
            'fecha_compra' => $this->faker->dateTimeThisYear(), // Fecha y hora de compra del boleto
        ];
    }
}
