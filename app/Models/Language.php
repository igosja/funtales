<?php

declare(strict_types=1);

namespace App\Models;

/**
 * Class Language
 * @package App\Models
 *
 * @property int id
 * @property string code
 * @property int created_at
 * @property string name
 * @property bool is_active
 * @property int updated_at
 */
class Language extends AbstractModel
{
    /**
     * @var string[] $fillable
     */
    protected $fillable = [
        'code',
        'name',
        'is_active',
    ];
}
