import Header from "./Header";
import Footer from "./Footer";
import CookieBanner from "../CookieConsent/CookieBanner";
import CookieModal from "../CookieConsent/CookieModal";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <CookieBanner/>
      <CookieModal/>
    </div>
  );
};

export default Layout;
