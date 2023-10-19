<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Support\Facades\Auth;

/**
 * Class Article
 * @package App\Models
 *
 * @property int id
 * @property int created_at
 * @property int created_by
 * @property int language_id
 * @property int rating
 * @property string title
 * @property string text
 * @property int updated_at
 * @property int updated_by
 * @property int views
 *
 * @property Comment[] comments
 */
class Article extends AbstractModel
{
    /**
     * @var string[] $fillable
     */
    protected $fillable = [
        'title',
        'text',
    ];

    /**
     * @return void
     */
    public static function boot(): void
    {
        parent::boot();
        static::creating(function ($model) {
            $user = Auth::user();
            $model->created_by = $user->id;
            $model->updated_by = $user->id;
            $model->language_id = 1;
        });
        static::updating(function ($model) {
            $user = Auth::user();
            $model->updated_by = $user->id;
        });
    }
}
