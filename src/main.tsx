import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { ActiveThemeProvider } from "./components/ActiveTheme";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

async function enableMocking() {
	if (process.env.NODE_ENV !== "development") {
		return;
	}

	const { worker } = await import("./mocks/browser");

	// `worker.start()` returns a Promise that resolves
	// once the Service Worker is up and ready to intercept requests.
	return worker.start();
}

// Create a client
const queryClient = new QueryClient();

// Render the app
// biome-ignore lint/style/noNonNullAssertion: Assume root element exists
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
	enableMocking().then(() => {
		const root = ReactDOM.createRoot(rootElement);
		root.render(
			<StrictMode>
				<QueryClientProvider client={queryClient}>
					<ActiveThemeProvider>
						<RouterProvider router={router} />
					</ActiveThemeProvider>
				</QueryClientProvider>
			</StrictMode>,
		);
	});
}
