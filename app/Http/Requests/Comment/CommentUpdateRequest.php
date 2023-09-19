<?php

declare(strict_types=1);

namespace App\Http\Requests\Comment;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class ArticleUpdateRequest
 * @package App\Http\Requests\Article
 */
class CommentUpdateRequest extends FormRequest
{
    /**
     * @return array[]
     */
    public function rules(): array
    {
        return [
            'text' => ['required', 'string'],
        ];
    }
}
