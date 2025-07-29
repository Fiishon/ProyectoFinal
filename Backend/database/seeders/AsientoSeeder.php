<?php

namespace Database\Seeders;

use App\Models\Asiento;
use App\Models\Autobus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AsientoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Asiento::factory(1500)->create();
    }
}
