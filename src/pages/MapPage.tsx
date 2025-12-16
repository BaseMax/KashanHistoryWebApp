import React from "react";
import Screen from "../components/Screen";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import ProvinceMap from "../components/ProvinceMap";

const MapPage: React.FC = () => (
  <Screen className="bg-white">
    <TopNav title="نقشه استان" showBack={true} />
    <main className="flex-1 w-full p-0 ltr">
      <div className="w-full h-full">
        <ProvinceMap />
      </div>
    </main>
    <BottomNav />
  </Screen>
);

export default MapPage;
