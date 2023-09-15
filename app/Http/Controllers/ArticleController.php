<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\Article\ArticleStoreRequest;
use App\Models\Article;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

/**
 * Class ArticleController
 * @package App\Http\Controllers
 */
class ArticleController extends Controller
{
    /**
     * @return Response
     */
    public function index(): Response
    {
        $articles = Article::get();

        return Inertia::render('Article/Index', [
            'articles' => $articles,
        ]);
    }

    /**
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('Article/Create', [
            'article' => new Article(),
        ]);
    }

    /**
     * @param ArticleStoreRequest $request
     * @return RedirectResponse
     * @throws Throwable
     */
    public function store(ArticleStoreRequest $request): RedirectResponse
    {
        $article = new Article();
        $article->fill($request->validated());
        $article->saveOrFail();

        $article->views++;
        $article->saveOrFail();

        return Redirect::route('article.show', [
            'article' => $article,
        ]);
    }

    /**
     * @param Article $article
     * @return Response
     * @throws Throwable
     */
    public function show(Article $article): Response
    {
        $article->views++;
        $article->saveOrFail();

        $article->comments;

        return Inertia::render('Article/Show', [
            'article' => $article,
        ]);
    }
}
