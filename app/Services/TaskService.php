<?php

namespace App\Services;

use App\Interfaces\TaskRepositoryInterface;
use App\Models\Task;
use Illuminate\Database\Eloquent\Collection;

class TaskService
{
    protected $taskRepository;

    public function __construct(TaskRepositoryInterface $taskRepository)
    {
        $this->taskRepository = $taskRepository;
    }

    public function getAllTasks(): Collection
    {
        return $this->taskRepository->getAllTasks();
    }

    public function createTask(array $data): Task
    {
        return $this->taskRepository->createTask($data);
    }

    public function getTaskById(int $id): ?Task
    {
        return $this->taskRepository->getTaskById($id);
    }

    public function updateTask(Task $task, array $data): bool
    {
        return $this->taskRepository->updateTask($task, $data);
    }

    public function deleteTask(Task $task): bool
    {
        return $this->taskRepository->deleteTask($task);
    }
}
