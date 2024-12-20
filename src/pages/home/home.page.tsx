import FeaturesSection from "./features.section";
import HeroSection from "./hero-section/hero-banner";
import ScreenSection from "./screen.section";
import TemplateSection from "./template.section";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <TemplateSection />
      <ScreenSection />
    </div>
  );
}
