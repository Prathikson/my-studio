import { useState } from "react";
import Preloader from "./components/preloader/Preloader";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";

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

  return loading ? (
    <Preloader onComplete={handlePreloaderComplete} />
  ) : (
    <Layout>
      <Home />
    </Layout>
  );
}
