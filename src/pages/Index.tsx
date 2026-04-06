import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import UpdatesSection from "@/components/UpdatesSection";
import FeaturesSection from "@/components/FeaturesSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <UpdatesSection />
      <FeaturesSection />
      <OpenSourceSection />
      <Footer />
    </div>
  );
};

export default Index;
