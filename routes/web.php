<?php

declare(strict_types=1);

use App\Http\Controllers\Admin\IndexController;
use App\Http\Controllers\Admin\LanguageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('admin')->name('admin.')->prefix('admin')->group(function () {
    Route::get('/', [IndexController::class, 'index'])->name('home');
    Route::name('language.')->prefix('language')->group(function () {
        Route::delete('/destroy/{language}', [LanguageController::class, 'destroy'])->name('destroy');
        Route::get('/', [LanguageController::class, 'index'])->name('index');
        Route::get('/create', [LanguageController::class, 'create'])->name('create');
        Route::get('/edit/{language}', [LanguageController::class, 'edit'])->name('edit');
        Route::get('/show/{language}', [LanguageController::class, 'show'])->name('show');
        Route::post('/store', [LanguageController::class, 'store'])->name('store');
        Route::put('/update/{language}', [LanguageController::class, 'update'])->name('update');
    });
});

require __DIR__.'/auth.php';
