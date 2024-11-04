/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import type { Task } from "../features/task/types/Task";
import useTaskStore from "../store/useTaskStore";

type TaskListProps = {
	taskList: Task[];
};

const TaskList: React.FC<TaskListProps> = ({ taskList }) => {
	const [error, setError] = useState<string | null>(null);
	const { tasks, createTask, updateTaskStatus, removeTask, setTasks } =
		useTaskStore();

	useEffect(() => {
		// 配列で要素入ってる時だけsetTasksを呼び出す
		if (taskList.length) {
			console.log("taskList:", taskList); // デバッグ用
			setTasks(taskList);
		}
	}, [taskList, setTasks]);

	if (error) return <p css={errorStyle}>Error: {error}</p>;

	const handleStatusChange = (id: number, status: Task["status"]) => {
		updateTaskStatus(id, status);
	};

	return (
		<div>
			<button type="button" onClick={createTask} css={addButtonStyle}>
				Add Task
			</button>
			<ul css={listStyle}>
				{tasks?.map((task) => (
					<li key={task.id} css={itemStyle}>
						<h3 css={titleStyle}>{task.title}</h3>
						<p css={descriptionStyle}>{task.description}</p>
						<select
							value={task.status}
							onChange={(e) =>
								handleStatusChange(task.id, e.target.value as Task["status"])
							}
							css={selectStyle}
						>
							<option value="pending">Pending</option>
							<option value="in_progress">In Progress</option>
							<option value="completed">Completed</option>
						</select>
						<button
							type="button"
							onClick={() => removeTask(task.id)}
							css={removeButtonStyle}
						>
							Remove
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

const errorStyle = css`
  color: red;
  font-weight: bold;
  margin: 10px 0;
`;

const listStyle = css`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const itemStyle = css`
  padding: 20px;
  margin: 5px 0;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const titleStyle = css`
  margin: 0;
  font-size: 1.5em;
  color: #333;
`;

const descriptionStyle = css`
  margin: 10px 0 0;
  color: #666;
`;

const selectStyle = css`
  margin: 10px 0;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const statusStyle = css`
  margin: 10px 0 0;
  color: #007bff;
`;

const addButtonStyle = css`
  padding: 10px 20px;
  margin: 10px 5px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const removeButtonStyle = css`
  padding: 10px 20px;
  margin: 10px 5px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

export default TaskList;
