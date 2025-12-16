import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  BuildingOffice2Icon,
  LightBulbIcon,
  HomeModernIcon,
  HeartIcon,
  MapIcon,
} from "@heroicons/react/24/outline";

export default function BottomNav() {
  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.add("has-bottom-nav");
    return () => {
      root.classList.remove("has-bottom-nav");
    };
  }, []);

  return (
    <nav
      className="bg-white shadow-inner z-1000 px-4 flex justify-around items-center fixed bottom-0 left-0 right-0 rtl h-16 z-50"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <NavLink
        to="/home"
        aria-label="خانه"
        className={({ isActive }) =>
          `w-20 flex flex-col items-center justify-center px-3 py-1.5 rounded-md ${isActive ? "bg-primary text-white" : "text-gray-600"}`
        }
      >
        <HomeIcon className="h-6 w-6" />
        <span className="text-sm mt-0.5">خانه</span>
      </NavLink>

      <NavLink
        to="/cities"
        aria-label="شهرها"
        className={({ isActive }) =>
          `w-20 flex flex-col items-center justify-center px-3 py-1.5 rounded-md ${isActive ? "bg-primary text-white" : "text-gray-600"}`
        }
      >
        <BuildingOffice2Icon className="h-6 w-6" />
        <span className="text-sm mt-0.5">شهرها</span>
      </NavLink>

      <NavLink
        to="/smart-suggest"
        aria-label="پیشنهاد"
        className={({ isActive }) =>
          `w-20 flex flex-col items-center justify-center px-3 py-1.5 rounded-md ${isActive ? "bg-primary text-white" : "text-gray-600"}`
        }
      >
        <LightBulbIcon className="h-6 w-6" />
        <span className="text-sm mt-0.5">پیشنهاد</span>
      </NavLink>

      <NavLink
        to="/map"
        aria-label="نقشه"
        className={({ isActive }) =>
          `w-20 flex flex-col items-center justify-center px-3 py-1.5 rounded-md ${isActive ? "bg-primary text-white" : "text-gray-600"}`
        }
      >
        <MapIcon className="h-6 w-6" />
        <span className="text-sm mt-0.5">نقشه</span>
      </NavLink>
    </nav>
  );
}
