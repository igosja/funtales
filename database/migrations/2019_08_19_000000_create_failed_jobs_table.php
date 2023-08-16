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
        Schema::create('failed_jobs', function (Blueprint $table) {
            $table->id();
            $table->longText('exception');
            $table->unsignedInteger('failed_at');
            $table->text('connection');
            $table->longText('payload');
            $table->text('queue');
            $table->string('uuid')->unique();
        });
    }

    /**
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('failed_jobs');
    }
};
