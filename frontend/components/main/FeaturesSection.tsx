import {CheckCircle2, Edit3, MessageSquare, Trash2} from "lucide-react";
import FeatureCard from "@/components/main/FeatureCard";

const FeaturesSection = () => (
     <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kluczowe funkcje</h2>
            <p className="text-muted-foreground text-lg">
                Wszystko czego potrzebujesz do efektywnego zarządzania wiadomościami
            </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <FeatureCard title={"Dodawanie wiadomości"} description={"Łatwy w użyciu formularz z walidacją danych"} icon={MessageSquare}/>
            <FeatureCard title={"Edycja"} description={"Szybka edycja wiadomości w intuicyjnym oknie dialogowym"} icon={Edit3} />
            <FeatureCard title={"Usuwanie"} description={"Bezpieczne usuwanie z potwierdzeniem akcji"} icon={Trash2} />
            <FeatureCard title={"Walidacja"} description={"Sprawdzanie poprawności danych w czasie rzeczywistym"} icon={CheckCircle2}/>
        </div>
    </section>
)

export default FeaturesSection;