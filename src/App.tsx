import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Preloader from "./components/preloader/Preloader";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Service from "./pages/services/Services";

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

      </Routes>
    </Layout>
  );
}
