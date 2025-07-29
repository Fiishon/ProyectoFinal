<?php

namespace Database\Factories;

use App\Models\Usuario;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Usuario>
 */
class UsuarioFactory extends Factory
{

    protected $model = Usuario::class;

    public function definition(): array
    {
        $rol = [
            'admin',
            'usuario'
        ];

        $rol = fake()->randomElement($rol);

        [$nombre, $apellido, $correo] = $this->generarDatosPorRol($rol);

        return [
            'nombre' => fake()->name,
            'apellido' => fake()->lastName,
            'email' => fake()->unique()->safeEmail,
            'password' => Hash::make('contrasena'), // Contraseña por defecto
            'rol' => $rol,
        ];
    }

    private function generarDatosPorRol(string $rol): array
    {
        return match ($rol) {
            'admin' => [
                fake()->firstName . ' Admin',
                fake()->lastName,
                fake()->unique()->safeEmail
            ],
            'usuario' => [
                fake()->firstName . ' User',
                fake()->lastName,
                fake()->unique()->safeEmail
            ]
        };

    
    }
    
}
