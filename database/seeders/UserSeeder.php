<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $superAdminUser = User::create([
            'name' => 'Super Admin',
            'email' => 'super-admin@gmail.com',
            'password' => Hash::make('password')
        ]);

        $adminUser = User::create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('password')
        ]);

        $superAdminRole = Role::where('name', 'super-admin')->first();
        $adminRole = Role::where('name', 'admin')->first();

        $permissions = Permission::all();

        if ($superAdminRole) {
            $superAdminUser->assignRole($superAdminRole);
        }

        $superAdminRole->syncPermissions($permissions);

        if ($adminRole) {
            $adminUser->assignRole($adminRole);
        }

        $adminRole->syncPermissions(['dashboard-access']);
    }
}
