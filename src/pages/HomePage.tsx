import React from "react";
import { BuildingOffice2Icon, UsersIcon, GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import Screen from "../components/Screen";
import TopNav from "../components/TopNav";
import Container from "../components/Container";
import BottomNav from "../components/BottomNav";
import StatsCard from "../components/StatsCard";
import ImageSlider from "../components/ImageSlider";

const stats = [
  { title: "جمعیت استان", value: "۵٬۱۲۰٬۸۵۰", icon: <UsersIcon className="w-7 h-7 text-blue-500" /> },
  { title: "تعداد شهر و شهرستان", value: "۲۴ شهرستان و ۱۰۶ شهر", icon: <BuildingOffice2Icon className="w-7 h-7 text-green-500" /> },
  { title: "مناطق گردشگری", value: "+۱۲۰", icon: <GlobeAsiaAustraliaIcon className="w-7 h-7 text-amber-500" /> },
];

const HomePage: React.FC = () => (
  <Screen>
    <TopNav title="اصفهانم" showBack={false} />
    <main className="flex-1 p-6 w-full">
      <Container>
        <div className="mb-4">
          <ImageSlider
            heightClass="h-44"
            images={[
              { src: `${import.meta.env.BASE_URL}assets/sliders/1.jpg`, alt: "منطقه گردشگری ۱" },
              { src: `${import.meta.env.BASE_URL}assets/sliders/2.jpg`, alt: "منطقه گردشگری ۲" },
              { src: `${import.meta.env.BASE_URL}assets/sliders/3.jpg`, alt: "منطقه گردشگری ۳" },
              { src: `${import.meta.env.BASE_URL}assets/sliders/4.jpg`, alt: "منطقه گردشگری ۳" },
            ]}
            autoPlayMs={3500}
          />
        </div>

        <p className="mb-4 text-gray-700 text-center">استان اصفهان با تنوع فرهنگی و اقلیمی و ظرفیت بالای گردشگری، دارای شهرها و روستاهای متعدد است.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((item) => (
            <StatsCard key={item.title} {...item} />
          ))}
        </div>

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
