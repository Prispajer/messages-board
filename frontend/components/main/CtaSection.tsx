import {Card, CardContent} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

const CtaSection = () => (
     <section className="container mx-auto px-4 py-20">
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2">
            <CardContent className="pt-12 pb-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Gotowy na start?</h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                    Zacznij korzystać z aplikacji już teraz. Prosty interfejs i potężne funkcje
                    czekają na Ciebie.
                </p>
                <Link href="/messages">
                    <Button size="lg" className="text-lg px-10">
                        Otwórz aplikację
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </Link>
            </CardContent>
        </Card>
    </section>
)

export default CtaSection;