<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Language\LanguageStoreRequest;
use App\Http\Requests\Admin\Language\LanguageUpdateRequest;
use App\Models\Language;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

/**
 * Class LanguageController
 * @package App\Http\Controllers\Admin
 */
class LanguageController extends Controller
{
    /**
     * @return Response
     */
    public function index(): Response
    {
        $languages = Language::get();

        return Inertia::render('Admin/Language/Index', [
            'languages' => $languages,
        ]);
    }

    /**
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('Admin/Language/Create', [
            'language' => new Language(),
        ]);
    }

    /**
     * @param LanguageStoreRequest $request
     * @return RedirectResponse
     * @throws Throwable
     */
    public function store(LanguageStoreRequest $request): RedirectResponse
    {
        $language = new Language();
        $language->fill($request->validated());
        $language->saveOrFail();

        return Redirect::route('admin.language.show', [
            'language' => $language,
        ]);
    }

    /**
     * @param Language $language
     * @return Response
     */
    public function show(Language $language): Response
    {
        return Inertia::render('Admin/Language/Show', [
            'language' => $language,
        ]);
    }

    /**
     * @param Language $language
     * @return Response
     */
    public function edit(Language $language): Response
    {
        return Inertia::render('Admin/Language/Update', [
            'language' => $language,
        ]);
    }

    /**
     * @param LanguageUpdateRequest $request
     * @param Language $language
     * @return RedirectResponse
     * @throws Throwable
     */
    public function update(LanguageUpdateRequest $request, Language $language): RedirectResponse
    {
        $language->fill($request->validated());
        $language->saveOrFail();

        return Redirect::route('admin.language.show', [
            'language' => $language,
        ]);
    }

    /**
     * @param Language $language
     * @return RedirectResponse
     * @throws Throwable
     */
    public function destroy(Language $language): RedirectResponse
    {
        $language->deleteOrFail();

        return Redirect::route('admin.language.index');
    }
}
