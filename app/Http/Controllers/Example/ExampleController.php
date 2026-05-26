<?php

namespace App\Http\Controllers\Example;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ExampleController extends Controller
{
    // public function store(
    //     StorePostRequest $request,
    //     CreatePostAction $createPostAction
    // ) {
    //     $createPostAction->handle(
    //         $request->validated()
    //     );
    // 
    //     return back()->with('success', 'Post created');
    //     or
    //     return Inertia::flash('success', 'Post created')->back();
    // }



    // public function update(
    //     UpdatePostRequest $request,
    //     Post $post,
    //     UpdatePostAction $updatePostAction
    // ) {
    //     $updatePostAction->handle(
    //         $post,
    //         $request->validated()
    //     );

    //     return back()->with('success', 'Post updated');
    //     or
    //     return Inertia::flash('success', 'Post updated')->back();
    // }

    // public function destroy(
    //     Post $post,
    //     DeletePostAction $deletePostAction
    // ) {
    //     $deletePostAction->handle($post);

    //     return back()->with('success', 'Post deleted');
    //     or
    //     return Inertia::flash('success', 'Post deleted')->back();
    // }
}
