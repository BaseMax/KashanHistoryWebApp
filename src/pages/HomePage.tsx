

import React from "react";
import { MapPinIcon, BuildingOffice2Icon, UsersIcon, GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import Screen from "../components/Screen";
import TopNav from "../components/TopNav";
import Container from "../components/Container";
import BottomNav from "../components/BottomNav";
import ProvinceMap from "../components/ProvinceMap";
import StatsCard from "../components/StatsCard";
import CityCategoryCard from "../components/CityCategoryCard";
import ImageSlider from "../components/ImageSlider";


// داده نمونه برای آمار و شهرها
const stats = [
  { title: "جمعیت استان", value: "۵٬۱۲۰٬۸۵۰", icon: <UsersIcon className="w-7 h-7 text-blue-500" /> },
  { title: "تعداد شهرها", value: "۲۴", icon: <BuildingOffice2Icon className="w-7 h-7 text-green-500" /> },
  { title: "مناطق گردشگری", value: "+۱۲۰", icon: <GlobeAsiaAustraliaIcon className="w-7 h-7 text-amber-500" /> },
];

const cities = [
  { name: "کاشان", desc: "شهر تاریخی و فرهنگی", icon: <BuildingOffice2Icon className="w-6 h-6 text-blue-400" /> },
  { name: "اصفهان", desc: "مرکز استان و قطب گردشگری", icon: <BuildingOffice2Icon className="w-6 h-6 text-green-500" /> },
  { name: "نطنز", desc: "طبیعت و آثار تاریخی", icon: <BuildingOffice2Icon className="w-6 h-6 text-amber-500" /> },
  { name: "اردستان", desc: "آب‌انبارها و معماری خاص", icon: <BuildingOffice2Icon className="w-6 h-6 text-pink-400" /> },
];

const HomePage: React.FC = () => (
  <Screen>
    <TopNav title="اصفهانم" showBack={true} />
    <main className="flex-1 p-6 w-full">
      <Container>
        {/* اسلایدر تصاویر بالای صفحه */}
        <div className="mb-4">
          <ImageSlider
            heightClass="h-44"
            images={[
              { src: "/assets/slider/slide1.jpg", alt: "منطقه گردشگری ۱" },
              { src: "/assets/slider/slide2.jpg", alt: "منطقه گردشگری ۲" },
              { src: "/assets/slider/slide3.jpg", alt: "منطقه گردشگری ۳" },
            ]}
            autoPlayMs={3500}
          />
        </div>
        <h1 className="text-3xl font-bold mb-4">استان اصفهان</h1>
        <ProvinceMap />

        <p className="mb-4 text-gray-700 text-center">استان اصفهان با تنوع فرهنگی و اقلیمی و ظرفیت بالای گردشگری، دارای شهرها و روستاهای متعدد است.</p>
        {/* آمار */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          {stats.map((item) => (
            <StatsCard key={item.title} {...item} />
          ))}
        </div>
        {/* دسته‌بندی شهرها */}
        <h2 className="font-semibold text-lg mt-8 mb-3">شهرهای مهم استان</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {cities.map((city) => (
            <CityCategoryCard key={city.name} {...city} />
          ))}
        </div>
        {/* ویژگی‌ها */}
        <div className="bg-gray-100 rounded p-4 mt-4">
          <h2 className="font-semibold mb-2">ویژگی‌های استان اصفهان:</h2>
          <ul className="list-disc pr-5 text-right">
            <li>تنوع فرهنگی و اقلیمی</li>
            <li>ظرفیت بالای گردشگری</li>
            <li>شهرها و روستاهای متعدد</li>
            <li>مناطق بوم‌گردی و تاریخی فراوان</li>
            <li>غذاها و آیین‌های محلی متنوع</li>
          </ul>
        </div>
      </Container>
    </main>
    <BottomNav />
  </Screen>
);

export default HomePage;
