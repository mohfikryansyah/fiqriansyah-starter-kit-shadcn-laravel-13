<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TestController extends Controller
{
    public function index(Request $request)
    {
        $users = User::paginate($request->input('per_page', 10));
        return Inertia::render('test', compact('users'));
    }
}
