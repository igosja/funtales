<?php

declare(strict_types=1);

namespace App\Http\Requests\Admin\Language;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class LanguageUpdateRequest
 * @package App\Http\Requests\Admin\Language
 */
class LanguageUpdateRequest extends FormRequest
{
    /**
     * @return array[]
     */
    public function rules(): array
    {
        return [
            'code' => ['string', 'max:2', 'unique:languages,code,' . $this->id],
            'name' => ['string', 'max:255', 'unique:languages,name,' . $this->id],
            'is_active' => ['boolean'],
        ];
    }
}
