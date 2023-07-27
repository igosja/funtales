<?php

declare(strict_types=1);

namespace App\Http\Requests\Comment;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class CommentStoreRequest
 * @package App\Http\Requests\Comment
 */
class CommentStoreRequest extends FormRequest
{
    /**
     * @return array[]
     */
    public function rules(): array
    {
        return [
            'post_id' => ['required', 'integer', 'exists:posts,id'],
            'text' => ['required', 'string'],
        ];
    }
}
