<?php

declare(strict_types=1);

namespace App\Http\Requests\Post;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class PostStoreRequest
 * @package App\Http\Requests\Post
 */
class PostStoreRequest extends FormRequest
{
    /**
     * @return array[]
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'text' => ['required', 'string'],
        ];
    }
}
