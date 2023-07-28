<?php

declare(strict_types=1);

namespace App\Http\Requests\PostRating;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class PostRatingStoreRequest
 * @package App\Http\Requests\Post
 */
class PostRatingStoreRequest extends FormRequest
{
    /**
     * @return array[]
     */
    public function rules(): array
    {
        return [
            'post_id' => ['required', 'integer', 'exists:posts,id'],
            'value' => ['required', 'integer'],
        ];
    }
}
