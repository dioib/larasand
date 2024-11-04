<?php

namespace App\Http\Controllers;

use App\Services\TaskService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class TaskController extends Controller
{
    protected $taskService;

    public function __construct(TaskService $taskService)
    {
        $this->taskService = $taskService;
    }

    public function index(): JsonResponse
    {
        $tasks = $this->taskService->getAllTasks();
        return response()->json($tasks);
    }

    public function store(Request $request): JsonResponse
    {
        $validatedData = $request->validate([
            'title' => 'required|max:255',
            'description' => 'nullable',
        ]);

        $task = $this->taskService->createTask($validatedData);

        return response()->json($task, 201);
    }

    public function show(int $id): JsonResponse
    {
        $task = $this->taskService->getTaskById($id);
        if (! $task) {
            return response()->json(['message' => 'タスクが見つかりません'], Response::HTTP_NOT_FOUND);
        }
        return response()->json($task);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $task = $this->taskService->getTaskById($id);
        if (! $task) {
            return response()->json(['message' => 'タスクが見つかりません'], Response::HTTP_NOT_FOUND);
        }

        $validatedData = $request->validate([
            'title' => 'required|max:255',
            'description' => 'nullable',
        ]);
        $updatedTask = $this->taskService->updateTask($task, $validatedData);

        return response()->json($updatedTask);
    }

    public function destroy(int $id): JsonResponse
    {
        $task = $this->taskService->getTaskById($id);
        if (! $task) {
            return response()->json(['message' => 'タスクが見つかりません'], Response::HTTP_NOT_FOUND);
        }

        $this->taskService->deleteTask($task);

        return response()->json(null, 204);
    }
}
