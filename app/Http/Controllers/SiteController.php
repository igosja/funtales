<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Article;
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
        $articles = Article::orderBy('id', 'desc')->get();

        return Inertia::render('Site/Index', [
            'articles' => $articles,
        ]);
    }
}
