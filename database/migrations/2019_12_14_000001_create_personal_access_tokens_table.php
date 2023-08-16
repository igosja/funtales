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
        Schema::create('personal_access_tokens', function (Blueprint $table) {
            $table->id();
            $table->text('abilities')->nullable();
            $table->unsignedInteger('created_at');
            $table->unsignedInteger('expires_at')->nullable();
            $table->unsignedInteger('last_used_at')->nullable();
            $table->string('name');
            $table->string('token', 64)->unique();
            $table->morphs('tokenable');
            $table->unsignedInteger('updated_at');
        });
    }

    /**
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('personal_access_tokens');
    }
};
