import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MissionBriefing from "@/components/MissionBriefing";
import AboutSection from "@/components/AboutSection";
import FlightObjectives from "@/components/FlightObjectives";
import OperationalParameters from "@/components/OperationalParameters";
import PropulsionSystems from "@/components/PropulsionSystems";
import VehicleManifest from "@/components/VehicleManifest";
import FlightDirector from "@/components/FlightDirector";
import TelemetryDashboard from "@/components/TelemetryDashboard";
import MissionComms from "@/components/MissionComms";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <HeroSection />
      
      <div className="divider-cyan" />
      <MissionBriefing />
      
      <div className="divider-cyan" />
      <AboutSection />
      
      <div className="divider-cyan" />
      <FlightObjectives />
      
      <div className="divider-cyan" />
      <OperationalParameters />
      
      <div className="divider-cyan" />
      <PropulsionSystems />
      
      <div className="divider-cyan" />
      <VehicleManifest />
      
      <div className="divider-cyan" />
      <FlightDirector />
      
      <div className="divider-cyan" />
      <TelemetryDashboard />
      
      <div className="divider-cyan" />
      <MissionComms />
      
      <div className="divider-cyan" />
      <Footer />
    </main>
  );
}
