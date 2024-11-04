export interface Task {
	id: number;
	title: string;
	description?: string;
	status: "pending" | "in_progress" | "completed";
	due_date: string; // ISO形式の文字列として受け取る
}
