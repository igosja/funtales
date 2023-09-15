<?php

declare(strict_types=1);

use App\Models\Article;
use App\Models\RatingArticle;
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
            app(RatingArticle::class)->getTable(),
            function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('article_id');
                $table->unsignedInteger('created_at');
                $table->unsignedInteger('updated_at');
                $table->unsignedBigInteger('user_id');
                $table->tinyInteger('value');

                $table->foreign('article_id')->references('id')->on(app(Article::class)->getTable());
                $table->foreign('user_id')->references('id')->on(app(User::class)->getTable());
            }
        );
    }

    /**
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists(app(RatingArticle::class)->getTable());
    }
};
