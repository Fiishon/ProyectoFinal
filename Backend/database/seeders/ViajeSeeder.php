<?php

namespace Database\Seeders;

use App\Models\Viaje;
use App\Models\Usuario;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ViajeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        Viaje::factory(992)->create();
    }
}
