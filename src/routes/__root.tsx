import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { featureFlag } from "@/featureFlag";

export const Route = createRootRoute({
	component: () => (
		<>
			<Outlet />
			{featureFlag.tanstackRouterDevtool && <TanStackRouterDevtools />}
		</>
	),
});
