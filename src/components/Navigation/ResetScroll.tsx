import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ResetScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly jump to the top (no smooth scroll)
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; 
  }, [pathname]);

  return null;
}
