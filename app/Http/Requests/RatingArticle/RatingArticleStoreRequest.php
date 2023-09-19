<?php

declare(strict_types=1);

namespace App\Http\Requests\RatingArticle;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class RatingArticleStoreRequest
 * @package App\Http\Requests\RatingArticle
 */
class RatingArticleStoreRequest extends FormRequest
{
    /**
     * @return array[]
     */
    public function rules(): array
    {
        return [
            'article_id' => ['required', 'integer', 'exists:articles,id'],
            'value' => ['required', 'integer'],
        ];
    }
}
