<?php

namespace Database\Factories;

use App\Models\Boleto;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Boleto>
 */
class BoletoFactory extends Factory
{
    protected $model = Boleto::class;
    
    public function definition(): array
    {
        return [
            'estado' => $this->faker->randomElement(['vendido', 'reservado', 'cancelado']),
            'precio' => $this->faker->randomFloat(2, 100, 1000),
            'id_asiento' => $this->faker->numberBetween(1, 30), // Asientos del 1 al 30
            'id_viaje' => $this->faker->numberBetween(1, 992), // Viajes del 1 al 992
            'id_usuario' => $this->faker->numberBetween(1, 50), // Usuarios del 1 al 100
            'fecha_compra' => $this->faker->dateTimeThisYear(),
        ];
    }
}