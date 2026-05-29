import PageLayout from '@/components/layout/PageLayout/PageLayout.jsx';
import Button from '@/components/ui/Button/Button.jsx';

/** Contact page starter — wire to a form handler or API later. */
export default function ContactPage() {
  return (
    <PageLayout className="contact-page">
      <main className="page-main contact-main">
        <header className="page-hero">
          <p className="page-eyebrow">Əlaqə</p>
          <h1 className="page-title">Bizimlə əlaqə saxlayın</h1>
          <p className="page-lead">
            Sifariş, B2B əməkdaşlıq və ya məhsul haqqında suallarınız üçün formu doldurun.
          </p>
        </header>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label className="contact-field">
            <span>Ad, soyad</span>
            <input type="text" name="name" autoComplete="name" required />
          </label>
          <label className="contact-field">
            <span>E-poçt</span>
            <input type="email" name="email" autoComplete="email" required />
          </label>
          <label className="contact-field">
            <span>Mesaj</span>
            <textarea name="message" rows={5} required />
          </label>
          <Button type="submit">Göndər</Button>
        </form>
      </main>
    </PageLayout>
  );
}
