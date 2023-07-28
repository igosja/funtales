<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Auth;

/**
 * Class Comment
 * @package App\Models
 *
 * @property int id
 * @property int created_at
 * @property int created_by
 * @property int post_id
 * @property int rating
 * @property string text
 * @property int updated_at
 * @property int updated_by
 *
 * @property Post post
 */
class Comment extends Model
{
    /**
     * @var string[] $fillable
     */
    protected $fillable = [
        'post_id',
        'text',
    ];

    protected $dateFormat = 'U';

    public static function boot(): void
    {
        parent::boot();
        static::creating(function (Comment $model) {
            /**
             * @var User $user
             */
            $user = Auth::user();
            $model->created_by = $user->id;
            $model->updated_by = $user->id;
        });
        static::updating(function (Comment $model) {
            /**
             * @var User $user
             */
            $user = Auth::user();
            $model->updated_by = $user->id;
        });
    }

    /**
     * @return BelongsTo
     */
    public function post(): BelongsTo
    {
        return $this->belongsTo(Post::class);
    }
}
