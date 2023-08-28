<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\Post\PostStoreRequest;
use App\Models\Post;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

/**
 * Class PostController
 * @package App\Http\Controllers
 */
class PostController extends Controller
{
    /**
     * @return Response
     */
    public function index(): Response
    {
        $posts = Post::get();

        return Inertia::render('Post/Index', [
            'posts' => $posts,
        ]);
    }

    /**
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('Post/Create', [
            'post' => new Post(),
        ]);
    }

    /**
     * @param PostStoreRequest $request
     * @return RedirectResponse
     * @throws Throwable
     */
    public function store(PostStoreRequest $request): RedirectResponse
    {
        $post = new Post();
        $post->fill($request->validated());
        $post->saveOrFail();

        return Redirect::route('post.show', [
            'post' => $post,
        ]);
    }

    /**
     * @param Post $post
     * @return Response
     * @throws Throwable
     */
    public function show(Post $post): Response
    {
        $post->views++;
        $post->saveOrFail();

        $post->comments;

        return Inertia::render('Post/Show', [
            'post' => $post,
        ]);
    }
}
