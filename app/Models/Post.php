<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

/**
 * Class Post
 * @package App\Models
 *
 * @property int id
 * @property int created_at
 * @property int created_by
 * @property int language_id
 * @property int rating
 * @property string slug
 * @property string title
 * @property string text
 * @property int updated_at
 * @property int updated_by
 * @property int views
 */
class Post extends Model
{
    /**
     * @var string[] $fillable
     */
    protected $fillable = [
        'title',
        'text',
    ];

    protected $dateFormat = 'U';

    public static function boot(): void
    {
        parent::boot();
        static::creating(function ($model) {
            $user = Auth::user();
            $model->created_by = $user->id;
            $model->updated_by = $user->id;
            $model->language_id = 1;
            $model->slug = Str::slug($model->id . ' ' . $model->title, '-');
        });
        static::updating(function ($model) {
            $user = Auth::user();
            $model->updated_by = $user->id;
            $model->slug = Str::slug($model->id . ' ' . $model->title, '-');
        });
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}
