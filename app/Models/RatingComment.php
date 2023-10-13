<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class RatingComment
 * @package App\Models
 *
 * @property int id
 * @property int comment_id
 * @property int created_at
 * @property int updated_at
 * @property int user_id
 * @property int value
 *
 * @property Comment comment
 */
class RatingComment extends AbstractModel
{
    /**
     * @var string[] $fillable
     */
    protected $fillable = [
        'comment_id',
        'value',
    ];

    /**
     * @return BelongsTo
     */
    public function comment(): BelongsTo
    {
        return $this->belongsTo(Comment::class);
    }
}
