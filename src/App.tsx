import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Preloader from "./components/preloader/Preloader";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Service from "./pages/services/Services";
import Brand from "./pages/services/subpages/Brand/Brand";
import Build from "./pages/services/subpages/Build/Build";
import Design from "./pages/services/subpages/Design/Design";
import Social from "./pages/services/subpages/Social/Social";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import ResetScroll from "./components/Navigation/ResetScroll";
import Portfolio from "./pages/portfolio/Portfolio";
import ProjectDetail from "./pages/portfolio/sections/[slug]";

import SocialServices from "./pages/services/subpages/Social/Services/[slug]";
import DesignServices from "./pages/services/subpages/Design/Services/[slug]";
import BrandServices from "./pages/services/subpages/Brand/Services/[slug]";
import BuildServices from "./pages/services/subpages/Build/Services/[slug]";
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/Privacy";
import CookieProviderWrapper from "./components/CookieConsent/CookieProviderWrapper";

export default function App() {
  const [loading, setLoading] = useState(() => {
    if (typeof window !== "undefined") {
      const visited = sessionStorage.getItem("hasVisited");
      return !visited;
    }
    return true;
  });

  const handlePreloaderComplete = () => {
    sessionStorage.setItem("hasVisited", "true");
    setLoading(false);
  };

  if (loading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <CookieProviderWrapper>

    <Layout>
      <ResetScroll/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />

        {/* Sub page services */}
        <Route path="/services/brand" element={<Brand />} />
        <Route path="/services/social" element={<Social />} />
        <Route path="/services/design" element={<Design />} />
        <Route path="/services/build" element={<Build />} />


        {/* Social */}
        <Route path="/services/social/:slug" element={<SocialServices />} />        
        <Route path="/services/build/:slug" element={<BuildServices />} />        
        <Route path="/services/brand/:slug" element={<BrandServices />} />        
        <Route path="/services/design/:slug" element={<DesignServices />} />        



        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Contact */}
         <Route path="/contact" element={<Contact />} />


         <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<ProjectDetail />} />

         <Route path="/terms-conditions" element={<Terms />} />
         <Route path="/privacy-policy" element={<Privacy />} />

      </Routes>
    </Layout>
    </CookieProviderWrapper>
  );
}
