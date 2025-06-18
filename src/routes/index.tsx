import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	// Queries
	const query = useQuery({
		queryKey: ["todos"],
		queryFn: () => fetch("/api/todos").then((res) => res.json()),
	});
	console.log(query.data);
	return (
		<>
		</>
	);
}
