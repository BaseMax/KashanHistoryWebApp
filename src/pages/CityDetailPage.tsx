import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowTopRightOnSquareIcon,
  BuildingOffice2Icon,
  CalendarDaysIcon,
  CloudIcon,
  FireIcon,
  GlobeAltIcon,
  MapPinIcon,
  SparklesIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import Screen from "../components/Screen";
import TopNav from "../components/TopNav";
import Container from "../components/Container";
import BottomNav from "../components/BottomNav";
import { citiesData } from "../data/cities";
import type { City } from "../data/cities";
import { toPersianNumber } from "../utils/numbers";

type GalleryItem = { title: string; image: string; caption?: string };
type Attraction = { id: string; name: string; type: string; short: string; image: string };
type CityDetail = {
  name: string;
  desc: string;
  vibe: string;
  climate: string;
  bestVisit: string;
  culture: string;
  foods: string[];
  heroImage: string;
  gallery: GalleryItem[];
  attractions: Attraction[];
  highlight?: string;
  humidity?: string;
  elevation?: string;
  wind?: string;
};

const fallbackGallery: GalleryItem[] = [
  {
    title: "نمای شهر",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80",
    caption: "کوچه‌های قدیمی و بافت تاریخی",
  },
  {
    title: "کویر و آسمان",
    image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1200&q=80",
    caption: "ستاره‌بینی و سکوت کویر",
  },
  {
    title: "معماری ایرانی",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
    caption: "طاق‌ها و حیاط‌های آینه‌کاری",
  },
];

const cityDetails: Record<string, CityDetail> = {
  "کاشان": {
    name: "کاشان",
    desc: "شهر تاریخی با خانه‌های قاجاری، مراسم گلاب‌گیری و مسیر کویرگردی محبوب.",
    vibe: "ترکیب بوی گلاب، طاق‌های آجری و شب‌های پرستاره کویر",
    climate: "گرم و خشک با زمستان‌های معتدل",
    bestVisit: "بهار برای گلاب‌گیری و اوایل پاییز",
    culture: "آیین گلاب‌گیری، قالیشویی مشهد اردهال، مهمان‌نوازی کویری",
    foods: ["گوشت و لوبیا", "باقلوای نطنز", "شیرینی حاجی بادام", "خورش لوبیا"],
    heroImage: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1500&q=80",
    gallery: [
      {
        title: "خانه تاریخی",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
        caption: "ارسی‌های چوبی و شیشه‌های رنگی",
      },
      {
        title: "کویر مرنجاب",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
        caption: "غروب‌های طلایی در تپه‌های ماسه‌ای",
      },
      {
        title: "باغ ایرانی",
        image: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80",
        caption: "جوی آب، سروها و هندسه ایرانی",
      },
      {
        title: "گنبد و بازار",
        image: "https://images.unsplash.com/photo-1521714161819-15534968fc5c?auto=format&fit=crop&w=1200&q=80",
        caption: "سقف‌های ضربی و تیمچه‌های قدیمی",
      },
    ],
    attractions: [
      {
        id: "fin-garden",
        name: "باغ فین",
        type: "تاریخی",
        short: "باغ ایرانی ثبت جهانی با آب قنات سلیمانیه و حمام تاریخی.",
        image: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "sialk-hills",
        name: "تپه سیلک",
        type: "باستانی",
        short: "تمدن هفت هزار ساله و زیگورات خشتی در حاشیه کاشان.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "agha-bozorg-mosque",
        name: "مسجد آقا بزرگ",
        type: "مذهبی",
        short: "ایوان‌های دوطبقه، بادگیرهای بلند و حیاط مرکزی.",
        image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "maranjab-desert",
        name: "کویر مرنجاب",
        type: "طبیعی",
        short: "شب‌های پرستاره، کاروانسرای قدیمی و دریاچه نمک آران.",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "tabatabaei-house",
        name: "خانه طباطبایی‌ها",
        type: "تاریخی",
        short: "آینه‌کاری، نقاشی‌های دیواری و بادگیرهای ظریف قاجاری.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      },
    ],
    highlight: "گلاب و خانه‌های تاریخی",
    humidity: "میانگین رطوبت 25٪",
    elevation: "ارتفاع 945 متر از سطح دریا",
    wind: "نسیم ملایم عصرگاهی کویر",
  },
};

const CityDetailPage: React.FC = () => {
  const { cityId } = useParams();
  const cityName = cityId ? decodeURIComponent(cityId) : "";
  const baseCity = useMemo(() => (citiesData as City[]).find((c) => c.name === cityName), [cityName]);

  const detail: CityDetail = useMemo(() => {
    if (cityDetails[cityName]) return cityDetails[cityName];
    return {
      name: cityName || "شهر ناشناس",
      desc: baseCity?.famousFor || "اطلاعاتی برای این شهر در دسترس نیست.",
      vibe: "شهری با ترکیبی از تاریخ و زندگی معاصر",
      climate: "اقلیم متنوع",
      bestVisit: "بهار",
      culture: "فرهنگ مهمان‌نواز و اصیل",
      foods: ["غذای محلی"],
      heroImage: fallbackGallery[0]?.image,
      gallery: fallbackGallery,
      attractions: [],
      highlight: baseCity?.famousFor,
      humidity: "-",
      elevation: "-",
      wind: "-",
    };
  }, [baseCity, cityName]);

  const featuredAttractions = useMemo(() => detail.attractions.slice(0, 5), [detail.attractions]);

  if (!cityName || !baseCity) {
    return (
      <Screen>
        <TopNav title="شهر پیدا نشد" showBack={true} />
        <main className="flex-1 w-full px-6 pb-24">
          <Container>
            <p className="text-sm text-gray-600 mb-4">نام شهر معتبر نیست.</p>
            <Link
              to={`/cities`}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-4 py-2 text-sm shadow"
            >
              بازگشت به لیست شهرها
            </Link>
          </Container>
        </main>
        <BottomNav />
      </Screen>
    );
  }

  return (
    <Screen>
      <TopNav title={"شهر " + detail.name} showBack={true} />
      <main className="flex-1 p-6 w-full">
        <Container>
          <div className="space-y-6">
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2f2a45] via-[#3a2f55] to-[#4c3a72] text-white shadow-xl">
              <div className="absolute inset-0 opacity-60">
                <img
                  src={detail.heroImage}
                  alt={detail.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
              </div>
              <div className="relative p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs text-white/80">
                  <SparklesIcon className="w-4 h-4" />
                  <span>{detail.vibe}</span>
                </div>
                <div>
                  <h1 className="text-3xl font-black leading-tight">{detail.name}</h1>
                  <p className="mt-2 text-sm text-white/80 leading-6">{detail.desc}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl bg-white/10 backdrop-blur px-3 py-2 flex items-center gap-2">
                    <SunIcon className="w-5 h-5 text-amber-300" />
                    <div>
                      <div className="text-xs text-white/70">آب و هوا</div>
                      <div className="font-semibold">{detail.climate}</div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/10 backdrop-blur px-3 py-2 flex items-center gap-2">
                    <CalendarDaysIcon className="w-5 h-5 text-emerald-200" />
                    <div>
                      <div className="text-xs text-white/70">بهترین زمان</div>
                      <div className="font-semibold">{detail.bestVisit}</div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/10 backdrop-blur px-3 py-2 flex items-center gap-2">
                    <FireIcon className="w-5 h-5 text-orange-200" />
                    <div>
                      <div className="text-xs text-white/70">غذاهای شاخص</div>
                      <div className="font-semibold truncate">{detail.foods.slice(0, 2).join("، ")}</div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/10 backdrop-blur px-3 py-2 flex items-center gap-2">
                    <GlobeAltIcon className="w-5 h-5 text-sky-200" />
                    <div>
                      <div className="text-xs text-white/70">فرهنگ و آیین</div>
                      <div className="font-semibold line-clamp-1">{detail.culture}</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="space-y-6">
              <section>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-xs text-gray-500">آنچه باید بدانید</p>
                    <h2 className="text-lg font-bold">نمای کلی شهر</h2>
                  </div>
                  {baseCity && (
                    <div className="flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                      <MapPinIcon className="w-4 h-4" />
                      <span>{toPersianNumber(baseCity.lat.toFixed(2))} / {toPersianNumber(baseCity.lng.toFixed(2))}</span>
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                    <div className="text-sm text-gray-700 leading-7">{detail.culture}</div>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs">
                      {detail.foods.map((food) => (
                        <span key={food} className="rounded-full bg-orange-50 text-orange-700 px-3 py-1 border border-orange-100">
                          {food}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {[
                      { label: "اقلیم", value: detail.climate, icon: <CloudIcon className="w-5 h-5 text-sky-500" /> },
                      { label: "معروف برای", value: detail.highlight || detail.vibe, icon: <SparklesIcon className="w-5 h-5 text-purple-500" /> },
                      { label: "ارتفاع", value: detail.elevation, icon: <BuildingOffice2Icon className="w-5 h-5 text-gray-500" /> },
                      { label: "رطوبت", value: detail.humidity, icon: <CloudIcon className="w-5 h-5 text-cyan-500" /> },
                      { label: "باد", value: detail.wind, icon: <GlobeAltIcon className="w-5 h-5 text-indigo-500" /> },
                    ]
                      .filter((item) => item.value)
                      .map((item) => (
                        <div key={item.label} className="flex items-start gap-2 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm">
                          {item.icon}
                          <div>
                            <div className="text-xs text-gray-500">{item.label}</div>
                            <div className="font-semibold text-gray-800">{item.value}</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-xs text-gray-500">حال و هوای شهر</p>
                    <h2 className="text-lg font-bold">گالری زنده</h2>
                  </div>
                </div>
                <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory" style={{ scrollbarWidth: "thin" }}>
                  {detail.gallery.map((item) => (
                    <div key={item.title} className="snap-start min-w-[220px] w-60">
                      <div className="relative h-40 rounded-2xl overflow-hidden shadow-md">
                        <img src={item.image} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute inset-0 flex flex-col justify-end p-3 text-white">
                          <div className="font-semibold text-sm">{item.title}</div>
                          {item.caption && <div className="text-xs text-white/80 line-clamp-1">{item.caption}</div>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-xs text-gray-500">۵ تجربه برتر</p>
                    <h2 className="text-lg font-bold">جاهای دیدنی</h2>
                  </div>
                  <Link
                    to={`/city/${cityName}/attractions`}
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80"
                  >
                    مشاهده بیشتر
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </Link>
                </div>
                <div className="space-y-3">
                  {featuredAttractions.length === 0 && (
                    <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">
                      برای این شهر هنوز جاذبه‌ای ثبت نشده است.
                    </div>
                  )}
                  {featuredAttractions.map((attraction) => (
                    <Link
                      key={attraction.id}
                      to={`/city/${cityName}/attraction/${attraction.id}`}
                      className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm hover:shadow-md transition"
                    >
                      <div className="relative h-20 w-24 overflow-hidden rounded-xl">
                        <img src={attraction.image} alt={attraction.name} className="h-full w-full object-cover" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs rounded-full bg-primary/10 text-primary px-2 py-0.5">{attraction.type}</span>
                          <span className="text-xs text-gray-400">{cityName}</span>
                        </div>
                        <div className="font-semibold text-gray-900 mt-1">{attraction.name}</div>
                        <div className="text-sm text-gray-600 line-clamp-2">{attraction.short}</div>
                      </div>
                      <ArrowTopRightOnSquareIcon className="w-5 h-5 text-gray-400" />
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </Container>
      </main>
      <BottomNav />
    </Screen>
  );
};

export default CityDetailPage;
