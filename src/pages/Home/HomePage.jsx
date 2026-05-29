import HeroSection from '@/sections/home/Hero/HeroSection.jsx';
import AboutSection from '@/sections/home/About/AboutSection.jsx';
import ProductionTechSection from '@/sections/home/ProductionTech/ProductionTechSection.jsx';
import DigitalFlowSection from '@/sections/home/DigitalFlow/DigitalFlowSection.jsx';
import B2BSection from '@/sections/home/B2B/B2BSection.jsx';
import ProcessStepsSection from '@/sections/home/ProcessSteps/ProcessStepsSection.jsx';
import PageLayout from '@/components/layout/PageLayout/PageLayout.jsx';

/** Landing page — composes home sections only. */
export default function HomePage() {
  return (
    <PageLayout className="home-page">
      <HeroSection />
      <AboutSection />
      <ProductionTechSection />
      <DigitalFlowSection />
      <B2BSection />
      <ProcessStepsSection />
    </PageLayout>
  );
}
