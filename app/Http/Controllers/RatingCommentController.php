<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\RatingComment\RatingCommentStoreRequest;
use App\Models\RatingComment;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Throwable;

/**
 * Class RatingCommentController
 * @package App\Http\Controllers
 */
class RatingCommentController extends Controller
{
    /**
     * @param RatingCommentStoreRequest $request
     * @return RedirectResponse
     * @throws Throwable
     */
    public function store(RatingCommentStoreRequest $request): RedirectResponse
    {
        $ratingComment = RatingComment::where('user_id', Auth::user()->id)
            ->where('comment_id', $request->get('comment_id'))
            ->first();
        if (!$ratingComment) {
            $ratingComment = new RatingComment();
        }

        $ratingComment->fill($request->validated());
        $ratingComment->user_id = Auth::user()->id;
        $ratingComment->saveOrFail();

        $ratingComment->comment->rating += $ratingComment->value;
        $ratingComment->comment->saveOrFail();

        return Redirect::route('post.show', [
            'post' => $ratingComment->comment->post,
        ]);
    }
}
