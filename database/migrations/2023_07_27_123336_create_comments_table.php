<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * @return void
     */
    public function up(): void
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('created_at');
            $table->unsignedBigInteger('created_by');
            $table->unsignedBigInteger('post_id');
            $table->unsignedInteger('rating')->default(0);
            $table->text('text');
            $table->unsignedInteger('updated_at');
            $table->unsignedBigInteger('updated_by');

            $table->foreign('created_by')->references('id')->on('users');
            $table->foreign('post_id')->references('id')->on('posts');
            $table->foreign('updated_by')->references('id')->on('users');
        });
    }

    /**
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};
