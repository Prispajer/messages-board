import {ArrowRight, MessageSquare} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const Navigation = () => (   <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">MessageApp</span>
        </div>
        <Link href="/messages">
            <Button>
                Przejdź do aplikacji
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </Link>
    </div>
</nav>)

export default Navigation;