<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class RatingPost
 * @package App\Models
 *
 * @property int id
 * @property int created_at
 * @property int post_id
 * @property int updated_at
 * @property int user_id
 * @property int value
 *
 * @property Post post
 */
class RatingPost extends Model
{
    /**
     * @var string $dateFormat
     */
    protected $dateFormat = 'U';

    /**
     * @var string[] $fillable
     */
    protected $fillable = [
        'post_id',
        'value',
    ];

    /**
     * @return BelongsTo
     */
    public function post(): BelongsTo
    {
        return $this->belongsTo(Post::class);
    }
}
