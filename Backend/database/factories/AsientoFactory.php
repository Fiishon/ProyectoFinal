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
    protected $model = Asiento::class;
    
    private static $currentBus = 1;
    private static $currentSeat = 1;

    public function definition(): array
{
    $autobusId = min(50, ceil(self::$currentSeat / 30));
    $numeroAsiento = (self::$currentSeat - 1) % 30 + 1;

    $data = [
        'numero' => $numeroAsiento,
        'disponible' => $this->faker->boolean(80),
        'autobus_id' => $autobusId,
    ];

    self::$currentSeat++;
    
    return $data;
}
}