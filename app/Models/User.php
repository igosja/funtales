<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

/**
 * Class User
 * @package App\Models
 *
 * @property int id
 * @property string name
 * @property string email
 * @property string email_verified_at
 * @property string password
 * @property int role
 * @property string remember_token
 * @property string created_at
 * @property string updated_at
 */
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    public const ROLE_ADMIN = 9;

    /**
     * @var string[] $casts
     */
    protected $casts = [
        'password' => 'hashed',
    ];

    /**
     * @var string $dateFormat
     */
    protected $dateFormat = 'U';

    /**
     * @var string[] $fillable
     */
    protected $fillable = [
        'email',
        'login',
        'password',
        'role',
    ];

    /**
     * @var string[] $hidden
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * @return int
     */
    public function getRole(): int
    {
        return $this->role;
    }
}
