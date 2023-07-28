<?php

declare(strict_types=1);

namespace App\Http\Requests\RatingComment;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class RatingCommentStoreRequest
 * @package App\Http\Requests\Post
 */
class RatingCommentStoreRequest extends FormRequest
{
    /**
     * @return array[]
     */
    public function rules(): array
    {
        return [
            'comment_id' => ['required', 'integer', 'exists:comments,id'],
            'value' => ['required', 'integer'],
        ];
    }
}
