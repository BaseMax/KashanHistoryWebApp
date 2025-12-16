import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

interface TopNavProps {
  title: string;
  hasLogo?: boolean;
  showBack?: boolean;
}

export default function TopNav({ title, hasLogo = true, showBack = false }: TopNavProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/home", { replace: true });
  };

  return (
    <header className="bg-[#e1a781] text-white z-10000 shadow-md py-4 px-6 rtl sticky top-0">
      {showBack ? (
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {hasLogo && (
              <img src="/assets/logo-light.png" alt="Logo" className="w-15 h-15 rounded" />
            )}
            <h1 className="text-xl font-bold">{title}</h1>
          </div>
          <button
            type="button"
            onClick={handleBack}
            aria-label="بازگشت"
            className="order-1 flex items-center justify-center"
          >
            <ArrowLeftIcon className="w-7 h-7 text-white" />
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center gap-3">
            {hasLogo && (
              <img src="/assets/logo-light.png" alt="Logo" className="w-15 h-15 rounded" />
            )}
            <h1 className="text-xl font-bold">{title}</h1>
          </div>
        </div>
      )}
    </header>
  );
}
