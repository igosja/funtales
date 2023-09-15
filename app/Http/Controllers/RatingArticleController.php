<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\RatingArticle\RatingArticleStoreRequest;
use App\Models\RatingArticle;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Throwable;

/**
 * Class RatingArticleController
 * @package App\Http\Controllers
 */
class RatingArticleController extends Controller
{
    /**
     * @param RatingArticleStoreRequest $request
     * @return RedirectResponse
     * @throws Throwable
     */
    public function store(RatingArticleStoreRequest $request): RedirectResponse
    {
        $ratingArticle = RatingArticle::where('user_id', Auth::user()->id)
            ->where('article_id', $request->get('article_id'))
            ->first();
        if (!$ratingArticle) {
            $ratingArticle = new RatingArticle();
        }

        $ratingArticle->fill($request->validated());
        $ratingArticle->user_id = Auth::user()->id;
        $ratingArticle->saveOrFail();

        $ratingArticle->post->rating += $ratingArticle->value;
        $ratingArticle->post->saveOrFail();

        return Redirect::route('article.show', [
            'article' => $ratingArticle->article,
        ]);
    }
}
