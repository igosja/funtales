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
        Schema::create('languages', function (Blueprint $table) {
            $table->id();
            $table->string('code', 2)->unique();
            $table->unsignedInteger('created_at');
            $table->string('name');
            $table->boolean('is_active')->default(false);
            $table->unsignedInteger('updated_at');
        });
    }

    /**
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('languages');
    }
};
