<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\Comment\CommentStoreRequest;
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Throwable;

/**
 * Class CommentController
 * @package App\Http\Controllers\Admin
 */
class CommentController extends Controller
{
    /**
     * @param CommentStoreRequest $request
     * @return RedirectResponse
     * @throws Throwable
     */
    public function store(CommentStoreRequest $request): RedirectResponse
    {
        $comment = new Comment();
        $comment->fill($request->validated());
        $comment->saveOrFail();

        $post = Post::findOrFail($comment->post_id);

        return Redirect::route('post.show', [
            'post' => $post,
        ]);
    }
}
