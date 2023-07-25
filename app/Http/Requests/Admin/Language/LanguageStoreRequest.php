<?php

declare(strict_types=1);

namespace App\Http\Requests\Admin\Language;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class LanguageStoreRequest
 * @package App\Http\Requests\Admin\Language
 */
class LanguageStoreRequest extends FormRequest
{
    /**
     * @return array[]
     */
    public function rules(): array
    {
        return [
            'code' => ['string', 'max:2', 'unique:languages'],
            'name' => ['string', 'max:255', 'unique:languages'],
            'is_active' => ['boolean'],
        ];
    }
}
