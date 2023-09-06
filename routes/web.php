<?php

declare(strict_types=1);

use App\Http\Controllers\Admin\IndexController;
use App\Http\Controllers\Admin\LanguageController;
use App\Http\Controllers\Admin\LogController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RatingCommentController;
use App\Http\Controllers\RatingPostController;
use App\Http\Controllers\SiteController;
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

Route::get('/', [SiteController::class, 'index'])->name('home');
Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::get('/logout', [AuthController::class, 'logout'])->name('logout');

Route::get('/index', function () {
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
    Route::name('comment.')->prefix('comment')->group(function () {
        Route::put('/store', [CommentController::class, 'store'])->name('store');
    });
    Route::name('post.')->prefix('post')->group(function () {
        Route::get('/', [PostController::class, 'index'])->name('index');
        Route::get('/create', [PostController::class, 'create'])->name('create');
        Route::get('/show/{post}', [PostController::class, 'show'])->name('show');
        Route::put('/store', [PostController::class, 'store'])->name('store');
    });
    Route::name('rating-comment.')->prefix('rating-comment')->group(function () {
        Route::put('/store', [RatingCommentController::class, 'store'])->name('store');
    });
    Route::name('rating-post.')->prefix('rating-post')->group(function () {
        Route::put('/store', [RatingPostController::class, 'store'])->name('store');
    });
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
    Route::name('log.')->prefix('log')->group(function () {
        Route::delete('/destroy/{log}', [LogController::class, 'destroy'])->name('destroy');
        Route::get('/', [LogController::class, 'index'])->name('index');
        Route::get('/show/{log}', [LogController::class, 'show'])->name('show');
    });
    Route::name('user.')->prefix('user')->group(function () {
        Route::get('/', [UserController::class, 'index'])->name('index');
        Route::get('/show/{user}', [UserController::class, 'show'])->name('show');
    });
});

require __DIR__.'/auth.php';
