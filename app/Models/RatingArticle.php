<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class RatingArticle
 * @package App\Models
 *
 * @property int id
 * @property int article_id
 * @property int created_at
 * @property int updated_at
 * @property int user_id
 * @property int value
 *
 * @property Article article
 */
class RatingArticle extends AbstractModel
{
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
    public function article(): BelongsTo
    {
        return $this->belongsTo(Article::class);
    }
}
