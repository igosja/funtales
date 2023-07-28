<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rating_posts', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('created_at');
            $table->unsignedBigInteger('post_id');
            $table->unsignedInteger('updated_at');
            $table->unsignedBigInteger('user_id');
            $table->tinyInteger('value');

            $table->foreign('post_id')->references('id')->on('posts');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rating_posts');
    }
};
