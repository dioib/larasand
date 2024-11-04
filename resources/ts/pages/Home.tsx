/** @jsxImportSource @emotion/react */
import { useQuery } from "@tanstack/react-query";
import TaskList from "../components/TaskList";
import { fetchTasks } from "../features/task/api/apiTaskList";
import type { Task } from "@/features/task/types/Task";
import { css, keyframes } from "@emotion/react";

export const Home = () => {
	const {
		data: tasks,
		error,
		isLoading,
	} = useQuery<Task[]>({
		queryKey: ["tasks"],
		queryFn: fetchTasks,
	});

	return (
		<div>
			<h1>Home</h1>
			{isLoading && (
				<div css={loadingContainerStyle}>
					<div css={loadingStyle} />
				</div>
			)}
			{error && <p>Error: {error.message}</p>}
			{tasks && <TaskList taskList={tasks} />}
		</div>
	);
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const loadingContainerStyle = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0;
`;

const loadingStyle = css`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spin} 1s linear infinite;
`;
