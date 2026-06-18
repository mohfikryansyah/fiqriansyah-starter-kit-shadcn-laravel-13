<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $create = fn ($name) => Permission::create(['name' => $name, 'guard_name' => 'web']);

        $create('dashboard-access');

        $create('example-datatable-access');
        $create('example-datatable-create');
        $create('example-datatable-update');
        $create('example-datatable-delete');
    }
}
