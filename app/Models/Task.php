<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Task
 *
 * @property int $id
 * @property string $title
 * @property string|null $description
 * @property string $status
 * @property Carbon|null $due_date
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class Task extends Model
{
    protected $table = 'tasks';

    protected $casts = [
        'due_date' => 'datetime'
    ];

    protected $fillable = [
        'title',
        'description',
        'status',
        'due_date'
    ];
}
