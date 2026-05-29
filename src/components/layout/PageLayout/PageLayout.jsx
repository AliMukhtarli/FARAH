import NavBar from '@/components/layout/NavBar/NavBar.jsx';
import FooterSection from '@/components/layout/Footer/FooterSection.jsx';

/**
 * Standard page shell: navigation + main content + footer.
 */
export default function PageLayout({ children, className = '', showFooter = true }) {
  return (
    <div className={className}>
      <NavBar />
      {children}
      {showFooter ? <FooterSection /> : null}
    </div>
  );
}
