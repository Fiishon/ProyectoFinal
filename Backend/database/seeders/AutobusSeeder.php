<?php

namespace Database\Seeders;

use App\Models\Autobus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AutobusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Autobus::factory(50)->create();
    }
}
