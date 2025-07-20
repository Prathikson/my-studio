import { useState } from "react";
import Preloader from "./components/preloader/Preloader";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";


export default function App() {
  const [loading, setLoading] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("hasVisited");
    }
    return true;
  });

  return loading ? (
    <Preloader onComplete={() => setLoading(false)} />
  ) : (
    <Layout>
      <Home/>
    </Layout>
  );
}
