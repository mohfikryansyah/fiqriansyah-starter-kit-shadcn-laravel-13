<?php

namespace App\Actions\Post;

use App\Models\Post;
use Illuminate\Support\Facades\DB;

class UpdatePostAction
{
    public function handle(array $data)
    {
        return DB::transaction(function () use ($data) {
            return Post::update($data);
        });
    }
}
