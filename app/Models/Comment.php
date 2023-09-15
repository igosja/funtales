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
 * @property int article_id
 * @property int created_at
 * @property int created_by
 * @property int rating
 * @property string text
 * @property int updated_at
 * @property int updated_by
 *
 * @property Article article
 */
class Comment extends Model
{
    /**
     * @var string[] $fillable
     */
    protected $fillable = [
        'article_id',
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
    public function article(): BelongsTo
    {
        return $this->belongsTo(Article::class);
    }
}
