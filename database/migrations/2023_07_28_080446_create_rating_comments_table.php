<?php

declare(strict_types=1);

use App\Models\RatingComment;
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
            app(RatingComment::class)->getTable(),
            function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('comment_id');
                $table->unsignedInteger('created_at');
                $table->unsignedInteger('updated_at');
                $table->unsignedBigInteger('user_id');
                $table->tinyInteger('value');

                $table->foreign('comment_id')->references('id')->on('comments');
                $table->foreign('user_id')->references('id')->on('users');
            }
        );
    }

    /**
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists(app(RatingComment::class)->getTable());
    }
};
