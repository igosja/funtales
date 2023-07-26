<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

/**
 * Class UserController
 * @package App\Http\Controllers\Admin
 */
class UserController extends Controller
{
    /**
     * @return Response
     */
    public function index(): Response
    {
        $users = User::get();

        return Inertia::render('Admin/User/Index', [
            'users' => $users,
        ]);
    }

    /**
     * @param User $user
     * @return Response
     */
    public function show(User $user): Response
    {
        return Inertia::render('Admin/User/Show', [
            'user' => $user,
        ]);
    }
}
