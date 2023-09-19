<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\Comment\CommentStoreRequest;
use App\Http\Requests\Comment\CommentUpdateRequest;
use App\Models\Comment;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Resources\Json\JsonResource;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class CommentController
 * @package App\Http\Controllers
 */
class CommentController extends Controller
{
    /**
     * @return AnonymousResourceCollection
     */
    public function index(): AnonymousResourceCollection
    {
        $comments = Comment::paginate();
        return JsonResource::collection($comments);
    }

    /**
     * @param Comment $comment
     * @return JsonResource
     */
    public function show(Comment $comment): JsonResource
    {
        return new JsonResource($comment);
    }

    /**
     * @param CommentStoreRequest $request
     * @return JsonResource
     */
    public function store(CommentStoreRequest $request): JsonResource
    {
        $comment = Comment::create($request->validated());
        $comment->saveOrFail();
        return new JsonResource($comment);
    }

    /**
     * @param CommentUpdateRequest $request
     * @param Comment $comment
     * @return JsonResource
     */
    public function update(CommentUpdateRequest $request, Comment $comment)
    {
        $comment->update($request->validated());
        return new JsonResource($comment);
    }

    /**
     * @param Comment $comment
     * @return JsonResponse
     */
    public function destroy(Comment $comment): JsonResponse
    {
        $comment->delete();
        return new JsonResponse(null, Response::HTTP_NO_CONTENT);
    }
}
