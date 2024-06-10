import React from "react";
import MainNav from "@/components/header/header-components/main-nav";
import MobileNav from "@/components/header/header-components/mobile-nav";
import Banner from "./header-components/banner";

export default function Header() {
  return (
    <header className="w-full border-b z-20 sticky top-0 bg-white">
      <Banner />
      <div className="flex h-24 items-center px-6 py-6">
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
}
