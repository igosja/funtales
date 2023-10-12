<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\Article\ArticleStoreRequest;
use App\Http\Requests\Article\ArticleUpdateRequest;
use App\Models\Article;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Resources\Json\JsonResource;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class ArticleController
 * @package App\Http\Controllers
 */
class ArticleController extends Controller
{
    /**
     * @return AnonymousResourceCollection
     */
    public function index(): AnonymousResourceCollection
    {
        $articles = Article::orderBy('id', 'desc')->cursorPaginate();
        return JsonResource::collection($articles);
    }

    /**
     * @param Article $article
     * @return JsonResource
     */
    public function show(Article $article): JsonResource
    {
        return new JsonResource($article);
    }

    /**
     * @param ArticleStoreRequest $request
     * @return JsonResource
     */
    public function store(ArticleStoreRequest $request): JsonResource
    {
        $article = Article::create($request->validated());
        $article->saveOrFail();
        return new JsonResource($article);
    }

    /**
     * @param ArticleUpdateRequest $request
     * @param Article $article
     * @return JsonResource
     */
    public function update(ArticleUpdateRequest $request, Article $article)
    {
        $article->update($request->validated());
        return new JsonResource($article);
    }

    /**
     * @param Article $article
     * @return JsonResponse
     */
    public function destroy(Article $article): JsonResponse
    {
        $article->delete();
        return new JsonResponse(null, Response::HTTP_NO_CONTENT);
    }
}
