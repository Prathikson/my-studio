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
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />

        {/* Sub page services */}
        <Route path="/services/brand" element={<Brand />} />
        <Route path="/services/social" element={<Social />} />
        <Route path="/services/design" element={<Design />} />
        <Route path="/services/build" element={<Build />} />


        {/* About */}
        <Route path="/about" element={<About />} />


      </Routes>
    </Layout>
  );
}
