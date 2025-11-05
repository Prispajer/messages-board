import Navigation from "@/components/main/Navigation";
import HeroSection from "@/components/main/HeroSection";
import FeaturesSection from "@/components/main/FeaturesSection";
import CtaSection from "@/components/main/CtaSection";
import Footer from "@/components/main/Footer";

const MainPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        <header>
            <Navigation/>
        </header>
        <main>
            <HeroSection/>
            <FeaturesSection/>
            <CtaSection/>
        </main>
        <Footer/>
    </div>
);

export default MainPage;
