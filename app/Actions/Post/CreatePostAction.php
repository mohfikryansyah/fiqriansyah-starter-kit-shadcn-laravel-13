<?php

namespace App\Actions\Post;

use App\Models\Post;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CreatePostAction
{
    public function handle(array $data)
    {
        return DB::transaction(function () use ($data) {
            $data['author_id'] = Auth::id();

            $post = Post::create($data);
            
            return $post;
        });
    }
}
