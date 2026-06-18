<?php

namespace App\Http\Controllers;

use App\Actions\Post\CreatePostAction;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $posts = Post::query()
            ->with('author')
            ->search($request->input('search'))
            ->paginate($request->input('per_page', 10))
            ->onEachSide(2)
            ->withQueryString();

        return Inertia::render('menu-sidebar/post/index', [
            'posts' => $posts,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $posts = Post::query()
            ->with('author')
            ->search($request->input('search'))
            ->paginate($request->input('per_page', 10))
            ->onEachSide(2)
            ->withQueryString();

        return Inertia::render('menu-sidebar/post/index', [
            'posts' => $posts,
            'modalOpen' => true,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, CreatePostAction $createPostAction)
    {
        $createPostAction->handle($request->validate([
            'title' => ['required', 'string', 'max:255'],
            'content' => ['required', 'string'],
        ]));

        return to_route('posts.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
