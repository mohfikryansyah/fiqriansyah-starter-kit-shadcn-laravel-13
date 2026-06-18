<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'landing/index')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'menu-sidebar/dashboard/dashboard')->name('dashboard');
    Route::resource('posts', PostController::class);
});

require __DIR__.'/settings.php';
