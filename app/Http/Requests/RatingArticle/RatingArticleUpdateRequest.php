<?php

declare(strict_types=1);

namespace App\Http\Requests\RatingArticle;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class RatingArticleUpdateRequest
 * @package App\Http\Requests\RatingArticle
 */
class RatingArticleUpdateRequest extends FormRequest
{
    /**
     * @return array[]
     */
    public function rules(): array
    {
        return [
            'value' => ['required', 'integer'],
        ];
    }
}
