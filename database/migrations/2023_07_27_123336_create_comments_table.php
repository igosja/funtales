<?php

declare(strict_types=1);

use App\Models\Article;
use App\Models\Comment;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * @return void
     */
    public function up(): void
    {
        Schema::create(
            app(Comment::class)->getTable(),
            function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('article_id');
                $table->unsignedInteger('created_at');
                $table->unsignedBigInteger('created_by');
                $table->integer('rating')->default(0);
                $table->text('text');
                $table->unsignedInteger('updated_at');
                $table->unsignedBigInteger('updated_by');

                $table->foreign('article_id')->references('id')->on(app(Article::class)->getTable());
                $table->foreign('created_by')->references('id')->on(app(User::class)->getTable());
                $table->foreign('updated_by')->references('id')->on(app(User::class)->getTable());
            }
        );
    }

    /**
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists(app(Comment::class)->getTable());
    }
};
