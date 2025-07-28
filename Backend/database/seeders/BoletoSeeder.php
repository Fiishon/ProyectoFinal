<?php

namespace Database\Seeders;

use App\Models\Boleto;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BoletoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Boleto::factory(50)->create(); // Crear 50 boletos con datos ficticios
        // Puedes ajustar el número de boletos según tus necesidades
    }
}
