<?php

namespace Database\Factories;

use App\Models\Asiento;
use App\Models\Autobus;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Asiento>
 */
class AsientoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Asiento::class;
    public function definition(): array
    {
        return [
            'numero' => $this->faker->numberBetween(1, 50), // Número del asiento entre 1 y 50
            'disponible' => $this->faker->boolean(80), // 80% de probabilidad de que el asiento esté disponible
            'autobus_id' => Autobus::factory(), // Relación con la tabla autobus
        ];
    }
}
