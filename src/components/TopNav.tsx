import React from "react";

interface TopNavProps {
  title: string;
  hasLogo?: boolean;
  showBack?: boolean;
}

export default function TopNav({ title, hasLogo = true, showBack = false }: TopNavProps) {
  return (
    <header className="bg-[#e1a781] text-white shadow-md py-4 px-6 rtl">
      <div className={`flex items-center justify-${showBack ? "between" : "center"} gap-3`}>
        {hasLogo && <img src="/assets/logo-light.png" alt="Logo" className="w-15 h-15 rounded" />}
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
    </header>
  );
}
