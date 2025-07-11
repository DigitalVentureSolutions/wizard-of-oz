import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={cn("flex items-center space-x-4 lg:space-x-6", className)}
			{...props}
		>
			<Link
				to="/dashboard"
				className="text-sm font-medium transition-colors hover:text-primary"
			>
				Overview
			</Link>
			<Link
				to="/dashboard"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Customers
			</Link>
			<Link
				to="/dashboard"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Products
			</Link>
			<Link
				to="/dashboard"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Settings
			</Link>
		</nav>
	);
}
