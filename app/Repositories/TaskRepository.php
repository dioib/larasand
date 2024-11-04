<?php

namespace App\Repositories;

use App\Interfaces\TaskRepositoryInterface;
use App\Models\Task;

class TaskRepository implements TaskRepositoryInterface
{
    protected $task;

    public function __construct(Task $task)
    {
        $this->task = $task;
    }

    public function getAllTasks()
    {
        return $this->task::all();
    }

    public function getTaskById($id)
    {
        return $this->task::find($id);
    }

    public function createTask(array $data)
    {
        return $this->task::create($data);
    }

    public function updateTask($id, array $data)
    {
        $task = $this->task::find($id);
        if ($task) {
            $task->update($data);
            return $task;
        }
        return null;
    }

    public function deleteTask($id)
    {
        $task = $this->task::find($id);
        if ($task) {
            return $task->delete();
        }
        return false;
    }
}
