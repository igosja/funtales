<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\PostRating\PostRatingStoreRequest;
use App\Models\RatingPost;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Throwable;

/**
 * Class PostRatingController
 * @package App\Http\Controllers
 */
class PostRatingController extends Controller
{
    /**
     * @param PostRatingStoreRequest $request
     * @return RedirectResponse
     * @throws Throwable
     */
    public function store(PostRatingStoreRequest $request): RedirectResponse
    {
        $ratingPost = RatingPost::where('user_id', Auth::user()->id)
            ->where('post_id', $request->get('post_id'))
            ->first();
        if (!$ratingPost) {
            $ratingPost = new RatingPost();
        }

        $ratingPost->fill($request->validated());
        $ratingPost->user_id = Auth::user()->id;
        $ratingPost->saveOrFail();

        $ratingPost->post->rating += $ratingPost->value;
        $ratingPost->post->saveOrFail();

        return Redirect::route('post.show', [
            'post' => $ratingPost->post,
        ]);
    }
}
