<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Inertia\Response;

/**
 * Class IndexController
 * @package App\Http\Controllers
 */
class IndexController extends Controller
{
    /**
     * @return Response
     */
    public function index(): Response
    {
        $posts = Post::get();

        return Inertia::render('Index/Index', [
            'posts' => $posts,
        ]);
    }
}
