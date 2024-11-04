import apiClient from "../../../config/client";
import type { Task } from "../types/Task";

// タスク一覧取得
export const fetchTasks = async (): Promise<Task[]> => {
	const response = await apiClient.get<Task[]>("/tasks");
	return response.data;
};

export const fetchTaskById = async (id: number): Promise<Task> => {
	const response = await apiClient.get<Task>(`/tasks/${id}`);
	return response.data;
};
