<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $superAdminRole = Role::create(['name' => 'super-admin']);
        $superAdminRole->syncPermissions(Permission::all());

        $adminRole = Role::create(['name' => 'admin']);
        $adminRole->syncPermissions([
            'dashboard-access'
        ]);
    }
}
