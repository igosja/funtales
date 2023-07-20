<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function index(): Response
    {
        return Inertia::render('Admin/Index/Index');
    }
}
