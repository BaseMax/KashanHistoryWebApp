import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const LoadingPage: React.FC = () => {
  const navigate = useNavigate();
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let frame = 0;
    let direction = 1;
    const animate = () => {
      if (logoRef.current) {
        logoRef.current.style.transform = `translateY(${Math.sin(frame / 8) * 18}px)`;
      }
      frame += direction;
      requestAnimationFrame(animate);
    };
    animate();
    const timer = setTimeout(() => {
      navigate("/home", { replace: true });
    }, 1400);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#e1a781] transition-colors duration-700">
      <img
        ref={logoRef}
        src="/assets/logo-light.png"
        alt="Logo"
        className="w-28 h-28 rounded-full shadow-lg mb-6 animate-pulse"
        style={{ transition: "transform 0.2s" }}
      />
      <h1 className="text-white text-3xl font-extrabold tracking-widest drop-shadow-lg animate-fadein">اصفهانم</h1>
    </div>
  );
};

export default LoadingPage;
