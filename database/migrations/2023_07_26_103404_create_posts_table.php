<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * @return void
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('created_at');
            $table->unsignedBigInteger('created_by');
            $table->unsignedBigInteger('language_id');
            $table->unsignedInteger('rating')->default(0);
            $table->string('slug')->unique();
            $table->string('title');
            $table->text('text');
            $table->unsignedInteger('updated_at');
            $table->unsignedBigInteger('updated_by');
            $table->unsignedInteger('views')->default(0);

            $table->foreign('created_by')->references('id')->on('users');
            $table->foreign('language_id')->references('id')->on('languages');
            $table->foreign('updated_by')->references('id')->on('users');
        });
    }

    /**
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
