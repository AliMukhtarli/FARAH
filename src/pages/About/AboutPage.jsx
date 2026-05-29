import PageLayout from '@/components/layout/PageLayout/PageLayout.jsx';
import AboutSection from '@/sections/home/About/AboutSection.jsx';

/** Dedicated about page — reuses the home about section. */
export default function AboutPage() {
  return (
    <PageLayout className="about-page">
      <main className="page-main">
        <AboutSection />
      </main>
    </PageLayout>
  );
}
