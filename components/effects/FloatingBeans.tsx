"use client";

import { useEffect, useState } from "react";

export default function FloatingBeans() {
  const [beans, setBeans] = useState<{ id: number; left: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate 15 random beans
    const newBeans = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 15
    }));
    setBeans(newBeans);
  }, []);

  return (
    <div className="floating-beans">
      {beans.map((bean) => (
        <div
          key={bean.id}
          className="bean"
          style={{
            left: `${bean.left}%`,
            animationDelay: `${bean.delay}s`,
            animationDuration: `${bean.duration}s`
          }}
        >
          ☕
        </div>
      ))}
    </div>
  );
}
