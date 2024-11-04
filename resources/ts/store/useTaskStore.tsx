import { create } from "zustand";
import type { Task } from "../features/task/types/Task";

type TaskState = {
	tasks: Task[];
	setTasks: (tasks: Task[]) => void;
	createTask: () => void;
	addTask: (task: Task) => void;
	updateTaskStatus: (id: number, status: Task["status"]) => void;
	removeTask: (id: number) => void;
};

const useTaskStore = create<TaskState>((set) => ({
	tasks: [],
	setTasks: (tasks: Task[]) => {
		if (tasks) {
			console.log("setTasks called with:", tasks); // デバッグ用
			set({ tasks });
		}
	},
	createTask: () =>
		set((state) => {
			const newTask = {
				id: state.tasks.length + 1,
				title: `Task ${state.tasks.length + 1}`,
				description: `Description for task ${state.tasks.length + 1}`,
				status: "pending" as "pending" | "in_progress" | "completed",
				due_date: "",
			};
			return { tasks: [...state.tasks, newTask] };
		}),
	addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
	updateTaskStatus: (id, status) =>
		set((state) => ({
			tasks: state.tasks.map((task) =>
				task.id === id ? { ...task, status } : task,
			),
		})),
	removeTask: (id) =>
		set((state) => ({
			tasks: state.tasks.filter((task) => task.id !== id),
		})),
}));

export default useTaskStore;
