<?php

namespace Database\Factories;

use App\Models\Usuario;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Viaje>
 */
class ViajeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
    'origen' => $origen = $this->faker->randomElement([
        'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 
        'Chiapas', 'Chihuahua', 'Coahuila', 'Colima', 'Durango', 'Guanajuato', 
        'Guerrero', 'Hidalgo', 'Jalisco', 'México', 'Michoacán', 'Morelos', 
        'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 
        'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 
        'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas', 'Ciudad de México'
    ]),
    'destino' => $this->faker->randomElement(array_diff([
        'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 
        'Chiapas', 'Chihuahua', 'Coahuila', 'Colima', 'Durango', 'Guanajuato', 
        'Guerrero', 'Hidalgo', 'Jalisco', 'México', 'Michoacán', 'Morelos', 
        'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 
        'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 
        'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas', 'Ciudad de México'
    ], [$origen])),
    'hora' => $this->faker->time('H:i'),
    'fecha' => $this->faker->dateTimeBetween('now', '+1 year'),
    'costo' => $this->faker->randomFloat(2, 500, 5000),
];
    }
}
