import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-background border-b px-4 py-2 flex items-center gap-6">
      <ul className="flex gap-2">
        <li>
          <Button asChild variant="ghost">
            <Link to="/" className="[&.active]:font-bold">Home</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant="ghost">
            <Link to="/about" className="[&.active]:font-bold">About</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; 
