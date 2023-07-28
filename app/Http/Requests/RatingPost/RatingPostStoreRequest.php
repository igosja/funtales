<?php

declare(strict_types=1);

namespace App\Http\Requests\RatingPost;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class RatingPostStoreRequest
 * @package App\Http\Requests\Post
 */
class RatingPostStoreRequest extends FormRequest
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
