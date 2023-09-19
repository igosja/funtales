<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\RatingComment\RatingCommentStoreRequest;
use App\Http\Requests\RatingComment\RatingCommentUpdateRequest;
use App\Models\RatingComment;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Resources\Json\JsonResource;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class RatingCommentController
 * @package App\Http\Controllers
 */
class RatingCommentController extends Controller
{
    /**
     * @return AnonymousResourceCollection
     */
    public function index(): AnonymousResourceCollection
    {
        $ratingComments = RatingComment::paginate();
        return JsonResource::collection($ratingComments);
    }

    /**
     * @param RatingComment $ratingComment
     * @return JsonResource
     */
    public function show(RatingComment $ratingComment): JsonResource
    {
        return new JsonResource($ratingComment);
    }

    /**
     * @param RatingCommentStoreRequest $request
     * @return JsonResource
     */
    public function store(RatingCommentStoreRequest $request): JsonResource
    {
        $ratingComment = RatingComment::create($request->validated());
        return new JsonResource($ratingComment);
    }

    /**
     * @param RatingCommentUpdateRequest $request
     * @param RatingComment $ratingComment
     * @return JsonResource
     */
    public function update(RatingCommentUpdateRequest $request, RatingComment $ratingComment)
    {
        $ratingComment->update($request->validated());
        return new JsonResource($ratingComment);
    }

    /**
     * @param RatingComment $ratingComment
     * @return JsonResponse
     */
    public function destroy(RatingComment $ratingComment): JsonResponse
    {
        $ratingComment->delete();
        return new JsonResponse(null, Response::HTTP_NO_CONTENT);
    }
}
