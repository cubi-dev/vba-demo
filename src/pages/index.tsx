import React from "react";
import BannerScroll from "@/components/homepage/banner-scroll/BannerScroll";
import TableContent from "@/components/homepage/table-content/table-content";



export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="w-full flex items-center justify-center">
        <BannerScroll />
      </div>
      <div className="container py-24">
        <TableContent />
      </div>
    </div>
  );
}
