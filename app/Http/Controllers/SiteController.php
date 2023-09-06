<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Inertia\Response;

/**
 * Class SiteController
 * @package App\Http\Controllers
 */
class SiteController extends Controller
{
    /**
     * @return Response
     */
    public function index(): Response
    {
        $posts = Post::get();

        return Inertia::render('Site/Index', [
            'posts' => $posts,
        ]);
    }
}
