<?php

declare(strict_types=1);

use App\Models\Language;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * @return void
     */
    public function up(): void
    {
        Schema::create(
            app(Language::class)->getTable(),
            function (Blueprint $table) {
                $table->id();
                $table->string('code', 2)->unique();
                $table->unsignedInteger('created_at')->useCurrent();
                $table->unsignedBigInteger('created_by');
                $table->string('name');
                $table->boolean('is_active')->default(false);
                $table->unsignedInteger('updated_at')->useCurrentOnUpdate();
                $table->unsignedBigInteger('updated_by');

                $table->foreign('created_by')->references('id')->on('users');
                $table->foreign('updated_by')->references('id')->on('users');
            }
        );

        DB::table(app(Language::class)->getTable())->insert([
            'code' => 'en',
            'created_at' => time(),
            'created_by' => 1,
            'name' => 'English',
            'is_active' => true,
            'updated_at' => time(),
            'updated_by' => 1,
        ]);

        DB::table(app(Language::class)->getTable())->insert([
            'code' => 'ru',
            'created_at' => time(),
            'created_by' => 1,
            'name' => 'Русский',
            'is_active' => true,
            'updated_at' => time(),
            'updated_by' => 1,
        ]);

        DB::table(app(Language::class)->getTable())->insert([
            'code' => 'uk',
            'created_at' => time(),
            'created_by' => 1,
            'name' => 'Українська',
            'is_active' => true,
            'updated_at' => time(),
            'updated_by' => 1,
        ]);
    }

    /**
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists(app(Language::class)->getTable());
    }
};
