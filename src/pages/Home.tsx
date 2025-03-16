import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Button variant='outline' asChild>
        <Link to='/about'>
          About Page <ChevronRight />
        </Link>
      </Button>
    </div>
  );
}