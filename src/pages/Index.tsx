
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DoctorsSection from "@/components/DoctorsSection";
import PharmacySection from "@/components/PharmacySection";
import EmergencySection from "@/components/EmergencySection";
import SearchSection from "@/components/SearchSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <SearchSection />
      <DoctorsSection />
      <PharmacySection />
      <EmergencySection />
      <Footer />
    </div>
  );
};

export default Index;
