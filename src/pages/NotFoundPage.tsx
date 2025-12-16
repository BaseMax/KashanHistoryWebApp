import React from "react";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import { Link } from "react-router-dom";
import Screen from "../components/Screen";

export default function NotFoundPage() {
  return (
    <Screen>
      <TopNav title="صفحه پیدا نشد" />

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white shadow rounded-2xl p-8 w-full max-w-md text-center space-y-4">
          <div className="flex items-center justify-center">
            <div className="relative">
              <span className="text-6xl font-extrabold text-primary">۴۰۴</span>
            </div>
          </div>
          <h1 className="text-xl font-bold text-gray-800">اوه! صفحه‌ای که دنبال آن هستید پیدا نشد</h1>
          <p className="text-sm leading-7 text-gray-600">
            ممکن است آدرس را اشتباه وارد کرده باشید یا صفحه حذف شده باشد.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-2">
            <Link to="/home" className="px-4 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition">
              بازگشت به خانه
            </Link>
          </div>
        </div>
      </main>
      
      <BottomNav />
    </Screen>
  );
}
