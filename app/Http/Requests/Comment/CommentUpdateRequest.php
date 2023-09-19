<?php

declare(strict_types=1);

namespace App\Http\Requests\Comment;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class CommentUpdateRequest
 * @package App\Http\Requests\Comment
 */
class CommentUpdateRequest extends FormRequest
{
    /**
     * @return array[]
     */
    public function rules(): array
    {
        return [
            'text' => ['required', 'integer'],
        ];
    }
}
