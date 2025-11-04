import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

const HeroSection = () => (
    <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Zarządzaj wiadomościami
                <span className="block text-primary mt-2">z łatwością</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Profesjonalny system do zarządzania wiadomościami. Dodawaj, edytuj i organizuj
                komunikację w jednym miejscu.
            </p>
            <div className="flex gap-4 justify-center pt-4">
                <Link href="/messages">
                    <Button size="lg" className="text-lg px-8">
                        Rozpocznij teraz
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </Link>
            </div>
        </div>
    </section>
)

export default HeroSection;