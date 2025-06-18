// src/mocks/handlers.ts
import { HttpResponse, http } from "msw";

export const handlers = [
	http.get("/api/todos", () => {
		return HttpResponse.json([]);
	}),
];
