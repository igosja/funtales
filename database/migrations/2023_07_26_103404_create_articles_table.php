<?php

declare(strict_types=1);

use App\Models\Article;
use App\Models\Language;
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
            app(Article::class)->getTable(),
            function (Blueprint $table) {
                $table->id();
                $table->unsignedInteger('created_at');
                $table->unsignedBigInteger('created_by');
                $table->unsignedBigInteger('language_id');
                $table->integer('rating')->default(0);
                $table->string('slug')->unique();
                $table->string('title');
                $table->text('text');
                $table->unsignedInteger('updated_at');
                $table->unsignedBigInteger('updated_by');
                $table->unsignedInteger('views')->default(0);

                $table->foreign('created_by')->references('id')->on(app(User::class)->getTable());
                $table->foreign('language_id')->references('id')->on(app(Language::class)->getTable());
                $table->foreign('updated_by')->references('id')->on(app(User::class)->getTable());
            }
        );
    }

    /**
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists(app(Article::class)->getTable());
    }
};
