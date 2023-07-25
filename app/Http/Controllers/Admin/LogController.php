<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Log;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

/**
 * Class LogController
 * @package App\Http\Controllers\Admin
 */
class LogController extends Controller
{
    /**
     * @return Response
     */
    public function index(): Response
    {
        $logs = Log::get();

        return Inertia::render('Admin/Log/Index', [
            'logs' => $logs,
        ]);
    }

    /**
     * @param Log $log
     * @return Response
     */
    public function show(Log $log): Response
    {
        return Inertia::render('Admin/Log/Show', [
            'log' => $log,
        ]);
    }

    /**
     * @param Log $log
     * @return RedirectResponse
     * @throws Throwable
     */
    public function destroy(Log $log): RedirectResponse
    {
        $log->deleteOrFail();

        return Redirect::route('admin.log.index');
    }
}
