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
        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->unsignedInteger('created_at')->nullable();
            $table->string('email')->primary();
            $table->string('token');
        });
    }

    /**
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('password_reset_tokens');
    }
};
