<?php

namespace Database\Factories;

use App\Models\Autobus;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Autobus>
 */
class AutobusFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Autobus::class;

    public function definition(): array
    {
        return [
            'placa' => $this->faker->unique()->bothify('??-####'), // Placa del autobús
            'modelo' => $this->faker->randomElement(['Volvo', 'Mercedes-Benz', 'Scania', 'MAN']),
            'capacidad' => $this->faker->numberBetween(20, 50), // Capacidad de pasajeros entre 20 y 50
        ];
    }
}
