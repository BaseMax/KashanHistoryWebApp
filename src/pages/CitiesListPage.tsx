import React from "react";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import Screen from "../components/Screen";
import TopNav from "../components/TopNav";
import Container from "../components/Container";
import BottomNav from "../components/BottomNav";
import { citiesData} from "../data/cities";
import type { City } from "../data/cities";
import { Link } from "react-router-dom";

const colors: string[] = [
  "text-teal-600",
  "text-sky-600",
  "text-cyan-600",
  "text-emerald-600",
  "text-green-600",
  "text-lime-600",

  "text-amber-600",
  "text-yellow-600",
  "text-orange-600",

  "text-stone-600",
  "text-neutral-600",
  "text-zinc-600",

  "text-indigo-600",
  "text-violet-600",
  "text-purple-600",
  "text-fuchsia-600",
  "text-rose-600",
  "text-pink-600",

  "text-blue-600",
  "text-slate-600",
  "text-teal-700",
  "text-emerald-700",
  "text-cyan-700",
  "text-amber-700",

  "text-orange-700",
  "text-stone-700",
  "text-indigo-700",
  "text-purple-700",
  "text-rose-700",
  "text-blue-700",
];

const CitiesListPage: React.FC = () => (
  <Screen>
    <TopNav title="شهرهای استان اصفهان" showBack={true} />
    <main className="flex-1 p-6 w-full">
      <Container>
        <ul className="space-y-4">
          {(citiesData as City[]).map((city: City, index: number) => {
            const iconColor = colors[index % colors.length];
            return (
              <li key={city.name} className="list-none">
                <Link
                  to={`/cities/${city.name}`}
                  className="block w-full cursor-pointer bg-white rounded shadow p-3"
                >
                  <div className="flex items-center w-full">
                    <BuildingOffice2Icon className={`w-7 h-7 ml-2 ${iconColor}`} />
                    <div>
                      <div className="font-semibold">{city.name}</div>
                      <div className="text-sm text-gray-500">{city.famousFor || ""}</div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </main>
    <BottomNav />
  </Screen>
);

export default CitiesListPage;
