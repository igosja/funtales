<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\RatingArticle\RatingArticleStoreRequest;
use App\Http\Requests\RatingArticle\RatingArticleUpdateRequest;
use App\Models\RatingArticle;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Resources\Json\JsonResource;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class RatingArticleController
 * @package App\Http\Controllers
 */
class RatingArticleController extends Controller
{
    /**
     * @return AnonymousResourceCollection
     */
    public function index(): AnonymousResourceCollection
    {
        $ratingArticles = RatingArticle::paginate();
        return JsonResource::collection($ratingArticles);
    }

    /**
     * @param RatingArticle $ratingArticle
     * @return JsonResource
     */
    public function show(RatingArticle $ratingArticle): JsonResource
    {
        return new JsonResource($ratingArticle);
    }

    /**
     * @param RatingArticleStoreRequest $request
     * @return JsonResource
     */
    public function store(RatingArticleStoreRequest $request): JsonResource
    {
        $ratingArticle = RatingArticle::create($request->validated());
        return new JsonResource($ratingArticle);
    }

    /**
     * @param RatingArticleUpdateRequest $request
     * @param RatingArticle $ratingArticle
     * @return JsonResource
     */
    public function update(RatingArticleUpdateRequest $request, RatingArticle $ratingArticle)
    {
        $ratingArticle->update($request->validated());
        return new JsonResource($ratingArticle);
    }

    /**
     * @param RatingArticle $ratingArticle
     * @return JsonResponse
     */
    public function destroy(RatingArticle $ratingArticle): JsonResponse
    {
        $ratingArticle->delete();
        return new JsonResponse(null, Response::HTTP_NO_CONTENT);
    }
}
