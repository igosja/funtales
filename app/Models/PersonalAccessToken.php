<?php

declare(strict_types=1);

namespace App\Models;

use Laravel\Sanctum\PersonalAccessToken as SanctumPersonalAccessToken;

/**
 * Class PersonalAccessToken
 * @package App\Models
 *
 * @property int id
 * @property string abilities
 * @property string created_at
 * @property string expires_at
 * @property string last_used_at
 * @property string name
 * @property string token
 * @property string tokenable_type
 * @property int tokenable_id
 * @property string updated_at
 */
class PersonalAccessToken extends SanctumPersonalAccessToken
{
}
