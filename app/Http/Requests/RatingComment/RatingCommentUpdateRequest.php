<?php

declare(strict_types=1);

namespace App\Http\Requests\RatingComment;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class RatingCommentUpdateRequest
 * @package App\Http\Requests\RatingComment
 */
class RatingCommentUpdateRequest extends FormRequest
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
