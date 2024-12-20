import ContentWrapper from "@/common/components/ContentWrapper";
import HeroBackground from "./components/HeroBackground.tsx";
import HeroContent from "./components/HeroContent.tsx";
import CodePreview from "./components/CodePreview.tsx";

export default function HeroSection() {
  return (
    <div className="relative min-h-[90vh] overflow-hidden bg-[#0B1120]">
      <HeroBackground />
      <ContentWrapper className="py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <CodePreview />
        </div>
      </ContentWrapper>
    </div>
  );
}
