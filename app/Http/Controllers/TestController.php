<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TestController extends Controller
{
    public function index(Request $request)
    {
        $users = User::query()
            ->when($request->input('search'), function ($query, $search) {
                $query->whereAny(['name', 'email'], 'like', "%{$search}%");
            })
            ->paginate($request->input('per_page', 10))
            ->withQueryString();

        return Inertia::render('menu-sidebar/example/example-data-table', compact('users'))->flash('toast', [
            'type' => 'success',
            'message' => 'Data fetched successfully',
        ]);
    }
}
