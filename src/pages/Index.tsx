
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InvestmentDashboard from "@/components/InvestmentDashboard";
import GameSection from "@/components/GameSection";
import AIInsights from "@/components/AIInsights";
import CommunitySection from "@/components/CommunitySection";
import TradingInterface from "@/components/TradingInterface";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <Header />
      <HeroSection />
      <InvestmentDashboard />
      <TradingInterface />
      <AIInsights />
      <GameSection />
      <CommunitySection />
    </div>
  );
};

export default Index;
