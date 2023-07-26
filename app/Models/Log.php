<?php

declare(strict_types=1);

namespace App\Models;

use danielme85\LaravelLogToDB\Models\DBLog;

/**
 * Class Log
 * @package App\Models
 *
 * @property int id
 * @property string message
 * @property string channel
 * @property int level
 * @property string level_name
 * @property int unix_time
 * @property string datetime
 * @property string context
 * @property string extra
 * @property string created_at
 * @property string updated_at
 */
class Log extends DBLog
{
    protected $table = 'log';
}
