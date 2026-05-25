<?php

use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'menu-sidebar/dashboard/dashboard')->name('dashboard');
    Route::get('test', [TestController::class, 'index'])->name('test.index');
});

require __DIR__.'/settings.php';
