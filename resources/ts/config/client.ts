import redaxios from "redaxios";

const apiClient = redaxios.create({
	baseURL: "http://localhost:8000/api",
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

export default apiClient;
