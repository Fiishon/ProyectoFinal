<?php

namespace Database\Seeders;

use App\Models\Producto;
//use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void {
        // Crear 50 productos con datos ficticios
        Producto::factory(50)->create();
    }
}
