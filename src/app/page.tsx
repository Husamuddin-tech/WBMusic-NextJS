import Artists from "./components/Artists";
import FeaturedMusic from "./components/FeaturedMusic";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MusicTestimonialCards from "./components/TestimonialCards";
import UpcomingSongs from "./components/UpcomingSongs";
import WhyChooseUs from "./components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] pt-16">
    
    <HeroSection />
    <FeaturedMusic />
    <WhyChooseUs />
    <MusicTestimonialCards />
    <UpcomingSongs />
    <Artists />
    <Footer />
    </main>
  );
}
