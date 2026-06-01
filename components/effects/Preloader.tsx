"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // Wait for fade out animation before completely removing from DOM
      setTimeout(() => setVisible(false), 600); 
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`loader ${!loading ? "hidden" : ""}`}>
      <div className="loader-text">KÖFI</div>
      <div className="loader-bar"></div>
    </div>
  );
}
