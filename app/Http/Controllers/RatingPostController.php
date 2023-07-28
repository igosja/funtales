<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\RatingPost\RatingPostStoreRequest;
use App\Models\RatingPost;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Throwable;

/**
 * Class RatingPostController
 * @package App\Http\Controllers
 */
class RatingPostController extends Controller
{
    /**
     * @param RatingPostStoreRequest $request
     * @return RedirectResponse
     * @throws Throwable
     */
    public function store(RatingPostStoreRequest $request): RedirectResponse
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
