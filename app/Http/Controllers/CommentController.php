<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\Comment\CommentStoreRequest;
use App\Models\Comment;
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

        return Redirect::route('article.show', [
            'article' => $comment->article,
        ]);
    }
}
